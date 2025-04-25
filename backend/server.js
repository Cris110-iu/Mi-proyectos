// Importaciones
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Configuraciones
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Backend funcionando correctamente!');
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((error) => console.error('Error conectando a MongoDB:', error));

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});