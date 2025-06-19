require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/placeprep')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

async function resetDatabase() {
    try {
        // Drop the questions collection
        await mongoose.connection.collection('questions').drop();
        console.log('Dropped questions collection');
    } catch (error) {
        console.log('Collection might not exist, continuing...');
    }

    // Close the connection
    await mongoose.connection.close();
    console.log('Database reset complete');
}

resetDatabase(); 