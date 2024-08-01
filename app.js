const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const port = 3000;

// Habilitar CORS para todas las rutas
app.use(cors());
require('dotenv').config();


app.use(bodyParser.json());
app.use('/api', formRoutes);
app.use('/api', authRoutes);
app.use('/api', adminRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
