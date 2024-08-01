// routes/adminRoutes.js
const express = require('express');
const AdminController = require('../controllers/adminController');
const router = express.Router();

router.post('/admins', AdminController.createAdmin);
router.get('/admins/:id', AdminController.getAdminById);
router.post('/admins/login', AdminController.login);

module.exports = router;
