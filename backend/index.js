const express = require('express');
const connectDB = require('./config/db');
const usuariosRoutes = require('./routes/usuarios'); // 👈 Importa las rutas
const cors = require('cors');
require('dotenv').config();

const app = express();

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors()); // 👈 Habilita CORS si el frontend está en otro puerto
app.use(express.json()); // 👈 Para leer JSON del body

// Rutas
app.use('/api/usuarios', usuariosRoutes); // 👈 Usa las rutas de usuarios

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
