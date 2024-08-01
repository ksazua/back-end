const FormService = require('../services/formService');


class FormController {
    static async createForm(req, res) {
        try {
            const form = await FormService.createForm(req.body);
            res.status(201).json(form);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async getFormById(req, res) {
        try {
            const form = await FormService.getFormById(req.params.id);
            res.status(200).json(form);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    static async getAllForms(req, res) {
        try {
            const forms = await FormService.getAllForms();
            res.status(200).json(forms);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateFormStatus(req, res) {
        try {
            const { id } = req.params;
            const { statusType, status } = req.body;
            await FormService.updateFormStatus(id, statusType, status);
            res.status(200).json({ message: 'Status updated successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }


}

module.exports = FormController;
