const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter the type of exercise:",
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for your exercise:",
    },
    duration: {
        type: Number,
        trim: true,
        required: "Enter the duration of the exercise:",
    },
    weight: {
        type: Number,
        trim: true,
    },
    reps: {
        type: Number,
        trim: true,
    },
    sets: {
        type: Number,
        trim: true,
    },
    distance: {
        type: Number,
        trim: true,
    }
});

const Workout = mongoose.model("Workout", exerciseSchema);

module.exports = Workout;