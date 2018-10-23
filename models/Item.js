const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema(s)

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});