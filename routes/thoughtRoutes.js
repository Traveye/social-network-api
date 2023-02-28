// /api/thoughts
const router = require("express").Router();
const { Thought, User } = require("../models");

// GET to get all thoughts
router.get("/", async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    res.json(thoughts);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json(err);
  }
});

// GET to get a single thought by its _id
router.get("/:id", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    res.json(thought);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json(err);
  }
});

// POST to create a new thought (push the created thought's _id to the associated user's thoughts array field)
router.post("/:id", async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    const user = await User.findOneAndUpdate({ _id: req.params.id }, { $push: { thoughts: thought._id }});
    res.json(thought);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json(err);
  }
});

// PUT to update a thought by its _id
router.put("/:id", async (req, res) => {
  try {
    const updatedThought = await Thought.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updatedThought);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json(err);
  }
});

// DELETE to remove a thought by its _id
router.delete("/:id", async (req, res) => {
  try {
    const deletedThought = await Thought.deleteOne({ _id: req.params.id });
    res.json(deletedThought);
  } catch (err) {
    console.log("Error: ", err);
    res.status(500).json(err);
  }
});

// POST to create a reaction stored in a single thought's reactions array field
router.post("/:thoughtId/reactions", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    const newReaction = {
      reactionBody: req.body.reactionBody,
      username: req.body.username,
    };
    thought.reactions.push(newReaction);
    const updatedThought = await thought.save();
    res.json(updatedThought);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE to pull and remove a reaction by the reaction's reactionId value and delete it from the thoughts reactions array
router.delete("/:thoughtId/reactions/:reactionId", async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) {
      return res.status(404).json({ message: "Thought not found" });
    }
    thought.reactions.pull({ _id: req.params.reactionId });
    const updatedThought = await thought.save();    
    res.json(updatedThought);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
