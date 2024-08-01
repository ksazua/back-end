// controllers/adminController.js
const AdminService = require('../services/adminService');

class AdminController {
    static async createAdmin(req, res) {
        try {
            const admin = await AdminService.createAdmin(req.body);
            res.status(201).json(admin);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async getAdminById(req, res) {
        try {
            const admin = await AdminService.getAdminById(req.params.id);
            res.status(200).json(admin);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const admin = await AdminService.verifyAdmin(email, password);
            res.status(200).json(admin);
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
}

module.exports = AdminController;
