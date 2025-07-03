const express = require('express');
const workoutController = require('../../controllers/workoutController');
const router = express.Router();

// Route to get all workouts
router.get('/', workoutController.getAllWorkouts);
router.get('/:workoutId', workoutController.getOneWorkout);
router.post('/', workoutController.createNewWorkout);
router.patch('/:workoutId', workoutController.updateOneWorkout);
router.delete('/:workoutId', workoutController.deleteOneWorkout);

module.exports = router;
