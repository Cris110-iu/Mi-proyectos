const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Conectar a MongoDB
connectDB();

// Tu código de rutas y middlewares aquí

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));