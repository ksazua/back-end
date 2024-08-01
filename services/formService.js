const db = require('../data/firebase');
const { collection, addDoc, getDoc, doc, query, where, getDocs, updateDoc } = require('firebase/firestore');
const Form = require('../models/formModel');
const { sendClientEmail, sendAdminEmail } = require('./emailService');

class FormService {
    static async createForm(data) {
        // Verificar si el correo electrónico ya existe
        const q = query(collection(db, 'forms'), where('email', '==', data.email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            throw new Error('Email already exists');
        }

        data.role = data.role || 'client';
        const formRef = await addDoc(collection(db, 'forms'), data);
        const form = new Form({ id: formRef.id, ...data });

        // Enviar correos electrónicos
        sendClientEmail(form);
        sendAdminEmail(form);

        return form;
    }

    static async getFormById(id) {
        const formRef = doc(db, 'forms', id);
        const formSnap = await getDoc(formRef);
        if (formSnap.exists()) {
            const data = formSnap.data();
            return new Form({ id, ...data });
        } else {
            throw new Error('Form not found');
        }
    }

    static async verifyUser(auth) {
        const q = query(collection(db, 'forms'), where('email', '==', auth.email), where('password', '==', auth.password));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            return new Form({ id: userDoc.id, ...userData });
        } else {
            throw new Error('Invalid credentials');
        }
    }

    static async getAllForms() {
        const formsSnapshot = await getDocs(collection(db, 'forms'));
        const forms = formsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return forms;
    }

    static async updateFormStatus(id, statusType, status) {
        const formRef = doc(db, 'forms', id);
        await updateDoc(formRef, {
            [statusType]: status
        });
    }
}

module.exports = FormService;
