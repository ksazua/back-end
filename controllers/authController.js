// controllers/authController.js
const AuthService = require('../services/authService');
const Auth = require('../models/authModel');

class AuthController {
    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const auth = new Auth(email, password);
            const user = await AuthService.login(auth);
            res.status(200).json(user);
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }

    static async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await AuthService.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = AuthController;
