// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  contraseña: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);