// /api/thoughts
const router = require("express").Router();
const { Thought } = require("../models/Thought");

// GET to get all thoughts

router.get("/", (req, res) => {
    Thought.find({}, (err, result) => {
        if (err) {
        console.log("Error: ", err);
        res.status(500).json(err);
        } else {
        res.json(result);
        }
    });
});

// GET to get a single thought by its _id

router.get("/:id", (req, res) => {
    Thought.findById(req.params.id, (err, result) => {
        if (err) {
        console.log("Error: ", err);
        res.status(500).json(err);
        } else {
        res.json(result);
        }
    });
});

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }

router.post("/", (req, res) => {
    Thought.create(req.body, (err, result) => {  // need to console.log req.body to see what it looks like
        if (err) {
        console.log("Error: ", err);
        res.status(500).json(err);
        } else {
        res.json(result);
        }
    });
});

// PUT to update a thought by its _id

// DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value
