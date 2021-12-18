const mongoose = require("mongoose");
//it will not pluralize collection name.
//mongoose.pluralize(null);

//user Schema
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
});

const userModel = mongoose.model("fullstack", userSchema, "fullstack")

module.exports = userModel;