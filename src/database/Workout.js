const DB = require('./db.json');

const getAllWorkouts = () => {
    return DB.workouts;
};

module.exports = {
    getAllWorkouts,
    // Add more functions as needed for workout management
};

// Example of how to use this module