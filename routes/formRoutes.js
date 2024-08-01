const express = require('express');
const FormController = require('../controllers/formController');
const router = express.Router();

router.post('/forms', FormController.createForm);
router.get('/forms/:id', FormController.getFormById);
router.get('/forms', FormController.getAllForms);
router.patch('/forms/:id/status', FormController.updateFormStatus);  // Nueva ruta

module.exports = router;
