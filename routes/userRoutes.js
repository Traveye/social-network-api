// /api/users
const router = require("express").Router();
const { User } = require("../models");
// GET all users

router.get("/", (req, res) => {
  User.find({}, (err, result) => {
    if (err) {
      console.log("Error: ", err);
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});

// GET a single user by its _id and populated thought and friend data

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .populate("thoughts")
    .populate("friends")
    .exec((err, result) => {
      if (err) {
        console.log("Error: ", err);
        res.status(500).json(err);
      } else {
        res.json(result);
      }
    });
});

// POST a new user:

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }

router.post("/", (req, res) => {
  User.create(req.body, (err, result) => {
    if (err) {
      console.log("Error: ", err);
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});

// PUT to update a user by its _id

router.put("/:id", (req, res) => {
  User.updateOne({ _id: req.params.id }, { $set: req.body }, (err, result) => {
    if (err) {
      console.log("Error: ", err);
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});


// DELETE to remove user by its _id

router.delete("/:id", (req, res) => {
    User.deleteOne({ _id: req.params.id }, (err, result) => {
        if (err) {
        console.log("Error: ", err);
        res.status(500).json(err);
        } else {
        res.json(result);
        }
    });
});

// BONUS: Remove a user's associated thoughts when deleted.

router.delete("/:id", (req, res) => {
    User.deleteOne({ _id: req.params.id }, (err, result) => {
        if (err) {
        console.log("Error: ", err);
        res.status(500).json(err);
        } else {
        res.json(result);
        }
    });
});

// /api/users/:userId/friends/:friendId

router.post("/:userId/friends/:friendId", (req, res) => {
    User.updateOne(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        (err, result) => {
        if (err) {
            console.log("Error: ", err);
            res.status(500).json(err);
        } else {
            res.json(result);
        }
        }
    );
});

// POST to add a new friend to a user's friend list

router.post("/:userId/friends/:friendId", (req, res) => {
    User.updateOne(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        (err, result) => {
        if (err) {
            console.log("Error: ", err);
            res.status(500).json(err);
        } else {
            res.json(result);
        }
        }
    );
});

// DELETE to remove a friend from a user's friend list

router.delete("/:userId/friends/:friendId", (req, res) => {
    User.updateOne(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        (err, result) => {
        if (err) {
            console.log("Error: ", err);
            res.status(500).json(err);
        } else {
            res.json(result);
        }
        }
    );
});

module.exports = router;