const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    Name:{
        type :String,
        default:"Staff",
    }
});

mongoose.model('category', categorySchema);