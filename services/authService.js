// services/authService.js
const db = require('../data/firebase');
const { query, where, getDocs, collection, getDoc, doc } = require('firebase/firestore');
const Auth = require('../models/authModel');
const Form = require('../models/formModel');

class AuthService {
    static async login(auth) {
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

    static async getUserById(id) {
        const userRef = doc(db, 'forms', id);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            const data = userSnap.data();
            return new Form({ id, ...data });
        } else {
            throw new Error('User not found');
        }
    }
}

module.exports = AuthService;
