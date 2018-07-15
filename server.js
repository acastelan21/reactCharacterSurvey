const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

//Mongo Database 
const dbController = require("./controllers/dbController");
// Define middleware here
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}



app.get("/api/database", dbController.find);

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.use(function(req,res){
    res.sendFile(path.join(__dirname, "client/build/index.html"));
})
const db = process.env.MONGODB_URI || "mongodb://localhost:27017/reactcharactersurvey";
mongoose.connect(db, function (error) {
    // Log any errors connecting with mongoose
    if (error) {
        console.error(error);
    }
    // Or log a success message
    else {
        console.log("mongoose connection is successful");
    }
});

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});