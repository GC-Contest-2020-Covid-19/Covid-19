const mongoose = require("mongoose");

const helpSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    donator: {
        type: String,
        required: true,
    },
    donation: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("HelpObject", helpSchema);
