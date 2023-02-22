// WHEN I enter the command to invoke the application
// THEN my server is started and the Mongoose models are synced to the MongoDB database

const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/newnameDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;