const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

// Crear un nuevo usuario (POST)
router.post('/register', async (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  try {
    const nuevoUsuario = new User({ nombre, correo, contraseña });
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los usuarios (GET)
router.get('/', async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;