const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const usersRouter = require('./routes/users');
const servicesRouter = require('./routes/services');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à la base de données
connectDB();

// Routes principales
app.get('/', (req, res) => {
  res.json({ message: 'API DarCar' });
});

// Routes des utilisateurs et services
app.use('/api/users', usersRouter);
app.use('/api/services', servicesRouter);

// Routes des réservations
const bookingsRoutes = express.Router();
bookingsRoutes.get('/', (req, res) => {
  res.json({ message: 'Liste des réservations' });
});
app.use('/api/bookings', bookingsRoutes);

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur est survenue sur le serveur' });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
}); 