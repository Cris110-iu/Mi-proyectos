const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, contraseña } = req.body;

    // Verificar si el usuario ya existe
    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'El correo ya está registrado.' });
    }

    // Encriptar contraseña
    const salt = await bcrypt.genSalt(10);
    const contraseñaHasheada = await bcrypt.hash(contraseña, salt);

    // Crear nuevo usuario
    const nuevoUsuario = new User({
      nombre,
      email,
      contraseña: contraseñaHasheada
    });

    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario registrado correctamente.' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al registrar el usuario.' });
  }
};

exports.loginUsuario = async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    // Verificar si el usuario existe
    const usuario = await User.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ mensaje: 'Credenciales inválidas.' });
    }

    // Verificar contraseña
    const esCorrecta = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!esCorrecta) {
      return res.status(400).json({ mensaje: 'Credenciales inválidas.' });
    }

    // Crear token
    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({
      mensaje: 'Login exitoso',
      token,
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión.' });
  }
};