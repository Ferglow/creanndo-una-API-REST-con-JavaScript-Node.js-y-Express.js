const e = require('express');
const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    try {
        const allWorkouts = workoutService.getAllWorkouts();
        res.send({ status: 'ok', data: allWorkouts });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'Failed', data: { error: error?.message || error } });
    }
};

const getOneWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;
    if (!workoutId) {
        res 
            .status(400)
            .send({ 
                status: 'Failed', 
                data: { error: 'Workout ID is required' } 
            });
    }

    try {
    const workout = workoutService.getOneWorkout(workoutId);
    res.send({ status: 'ok', data: workout });
} catch (error) {
    res
        .status(error?.status || 500)
        .send({ status: 'Failed', data: { error: error?.message || error } });
}
};

const createNewWorkout = (req, res) => {
    const { body } = req;

    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips) {
        res
            .status(400)
            .send({
                status: 'Failed',
                data: {
                    error: 'Missing required fields: name, mode, equipment, exercises, trainerTips'
                },
            });
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    };
    try {

        const createdWorkout = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({
            status: 'ok',
            data: createdWorkout
        });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'Failed', data: { error: error?.message || error } });
    }
};

const updateOneWorkout = (req, res) => {
    const {
        body,
        params: { workoutId },
    } = req;
    if (!workoutId) {
        res
            .status(400)
            .send({ status: 'Failed', data: { error: "Parameter ':workoutId' can not be empty" } });
    }

    try {
        const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
        res.send({ status: 'ok', data: updatedWorkout });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'Failed', data: { error: error?.message || error } });
    }
};

const deleteOneWorkout = (req, res) => {
    const {
        params: { workoutId },
    } = req;
    if (!workoutId) {
        return;
    }

    workoutService.deleteOneWorkout(workoutId);
    res.send(204).send({ status: 'ok', });
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};

