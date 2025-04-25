const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Registro de usuario
router.post('/register', async (req, res) => {
  const { nombre, email, contraseña } = req.body;

  try {
    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const contraseñaHasheada = await bcrypt.hash(contraseña, salt);

    const nuevoUsuario = new User({ nombre, email, contraseña: contraseñaHasheada });
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

// Login de usuario
router.post('/login', async (req, res) => {
  const { email, contraseña } = req.body;

  try {
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
    }

    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contraseñaValida) {
      return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
    }

    const token = jwt.sign({ id: usuario._id, nombre: usuario.nombre }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ mensaje: 'Login exitoso', token });
  } catch (error) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

// Obtener todos los usuarios (opcional para pruebas)
router.get('/', async (req, res) => {
  try {
    const usuarios = await User.find().select('-contraseña');
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
