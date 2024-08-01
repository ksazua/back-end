// services/adminService.js
const db = require('../data/firebase');
const { collection, addDoc, getDoc, doc, query, where, getDocs } = require('firebase/firestore');
const Admin = require('../models/adminModel');

class AdminService {
    static async createAdmin(data) {
        // Verificar si el correo electrónico ya existe
        const q = query(collection(db, 'admins'), where('email', '==', data.email));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            throw new Error('Email already exists');
        }

        const adminRef = await addDoc(collection(db, 'admins'), data);
        return new Admin(adminRef.id, data.email, data.password);
    }

    static async getAdminById(id) {
        const adminRef = doc(db, 'admins', id);
        const adminSnap = await getDoc(adminRef);
        if (adminSnap.exists()) {
            const data = adminSnap.data();
            return new Admin(id, data.email, data.password);
        } else {
            throw new Error('Admin not found');
        }
    }

    static async verifyAdmin(email, password) {
        const q = query(collection(db, 'admins'), where('email', '==', email), where('password', '==', password));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const adminDoc = querySnapshot.docs[0];
            const adminData = adminDoc.data();
            return new Admin(adminDoc.id, adminData.email, adminData.password);
        } else {
            throw new Error('Invalid credentials');
        }
    }
}

module.exports = AdminService;
