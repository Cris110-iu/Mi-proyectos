// backend/routes/usuarios.js
const express = require('express');
const router = express.Router();

const usuariosFicticios = [
  { nombre: 'Ana Gómez', email: 'ana@example.com' },
  { nombre: 'Carlos Díaz', email: 'carlos@example.com' },
  { nombre: 'Luisa Méndez', email: 'luisa@example.com' },
];

router.get('/', (req, res) => {
  res.json(usuariosFicticios);
});

module.exports = router;
