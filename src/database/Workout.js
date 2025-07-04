const DB = require('./db.json');

const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
    return DB.workouts;
};


const createNewWorkout = (newWorkout) => {
    const isAlredyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlredyAdded) {
        return;
    };
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
};

module.exports = {
    getAllWorkouts,
    createNewWorkout
    // Add more functions as needed for workout management
};

// Example of how to use this module