const router = require('express').Router();
const Workout = require('../models/exercises.js');
const path = require('path');

//Pull workout data
router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//TODO: Route for adding exercise (/api/workouts/ID)
router.put('/api/workouts/:id', ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//TODO: Route for creating workouts (api/workouts)
router.post('/api/workouts/', ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//TODO: Route for getting workouts in range? (/api/workouts/range)
router.get('/api/workouts/range', (req,res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

//TODO: Route for new workout (/exercise)
router.get('/exercise', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
);

//TODO: Route for continue workout (also /exercise?)

//TODO: Route for Stats (/stats)
router.get('/stats', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/stats.html'))
);

module.exports = router;