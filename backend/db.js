const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/iNotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
    // Your code here
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectToMongo;
