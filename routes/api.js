const router = require("express").Router();
const Workout = require("../models/workout.js");
const { route } = require("./htmlRoutes.js");

router.post("/workouts", ({ body }, res) => {
    Workout.create({})
        .then((workout) => {
            res.json(workout)
        })
        .catch((err) => {
            res.json(err)
        })
});
router.get("/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercise.duration'
                },
            },
        },
    ])
        .then((workout) => {
            console.log('YOO', workout);
            res.json(workout)
        })
        .catch((e) => {
            res.json(e)
        })
});

router.put("/workouts/:id", ({ params, body }, res) => {
    console.log('PARAMS', req.params)
    Workout.findByIdAndUpdate(
        { _id: params.id },
        { $push: { exercise: body } },
        { new: true, runValidators: true }
    )
        .then((workout) => {
            res.json(workout)
        })
        .catch((e) => {
            res.json(e)
        })
});
router.get("/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:
                {
                    $sum: '$exercise.duration'
                },
                totalWeight:
                    { $sum: '$exercises.weight' }
            }
        }
    ])
        .limit(10)
        .then((workout) => {
            console.log('YOO', workout);
            res.json(workout)
        })
        .catch((e) => {
            res.json(e)
        })
});

module.exports = router;