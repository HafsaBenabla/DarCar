const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// GET tous les services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET un service par ID
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      res.json(service);
    } else {
      res.status(404).json({ message: 'Service non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST créer un service
router.post('/', async (req, res) => {
  const service = new Service({
    nom: req.body.nom,
    description: req.body.description,
    prix: req.body.prix,
    duree: req.body.duree,
    categorie: req.body.categorie,
    disponible: req.body.disponible,
    image: req.body.image,
    details: req.body.details,
    conditions: req.body.conditions
  });

  try {
    const newService = await service.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT mettre à jour un service
router.put('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      Object.assign(service, req.body);
      const updatedService = await service.save();
      res.json(updatedService);
    } else {
      res.status(404).json({ message: 'Service non trouvé' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE supprimer un service
router.delete('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      await service.deleteOne();
      res.json({ message: 'Service supprimé' });
    } else {
      res.status(404).json({ message: 'Service non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 