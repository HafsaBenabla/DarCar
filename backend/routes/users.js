const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Obtenir tous les utilisateurs
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Connexion utilisateur
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Utilisateur non trouvé" });
    }
    // Pour une vraie app, utiliser bcrypt pour vérifier le hash du mot de passe !
    if (user.password !== password) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }
    res.status(200).json({ message: "Connexion réussie", user: { email: user.email, nom: user.nom } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Créer un utilisateur
router.post('/', async (req, res) => {
  console.log('Tentative de création de compte avec :', req.body);
  const user = new User({
    nom: req.body.nom,
    prenom: req.body.prenom,
    email: req.body.email,
    password: req.body.password,
    telephone: req.body.telephone,
    role: req.body.role
  });

  try {
    const newUser = await user.save();
    console.log('Utilisateur créé avec succès :', newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erreur lors de la création du compte :', error.message);
    // Gérer l'erreur de duplication d'email
    if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
      res.status(409).json({ message: "Cet email est déjà utilisé." });
    } else {
      res.status(400).json({ message: error.message });
    }
  }
});

// Modifier un utilisateur
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Supprimer un utilisateur
router.delete('/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Utilisateur supprimé' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 