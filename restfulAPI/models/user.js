const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    employee_id: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User' , userSchema)