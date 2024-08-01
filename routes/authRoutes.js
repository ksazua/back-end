// routes/authRoutes.js
const express = require('express');
const AuthController = require('../controllers/authController');
const router = express.Router();

router.post('/login', AuthController.login);
router.get('/user/:id', AuthController.getUser);

module.exports = router;
