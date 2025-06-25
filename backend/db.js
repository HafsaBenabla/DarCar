const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://admin:admin@cluster0.bedq1.mongodb.net/DarCar?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connecté à MongoDB');
  } catch (error) {
    console.error('Erreur MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB; 