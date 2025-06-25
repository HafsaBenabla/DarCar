const express = require('express');
const connectDB = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion à la base de données
connectDB();

app.use(express.json());

// Exemple de route
app.get('/', (req, res) => {
  res.send('API DarCar opérationnelle !');
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
}); 