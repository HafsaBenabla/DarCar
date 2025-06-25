const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  prix: {
    type: Number,
    required: true
  },
  duree: {
    type: Number,  // durée en minutes
    required: true
  },
  categorie: {
    type: String,
    enum: ['Entretien', 'Réparation', 'Nettoyage', 'Diagnostic', 'Autre'],
    required: true
  },
  disponible: {
    type: Boolean,
    default: true
  },
  image: {
    type: String  // URL de l'image
  },
  details: [{
    type: String  // Liste des points inclus dans le service
  }],
  conditions: {
    type: String  // Conditions particulières ou restrictions
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema); 