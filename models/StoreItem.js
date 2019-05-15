const mongoose = require('mongoose');
const {Schema} = mongoose;

const StoreItemSchema = new Schema({
    Name:{
        type :String,
        default:"Staff",
    },
    Id: String,
    Sizes:[String],
    Prices:[Number]
});

mongoose.exports = StoreItemSchema;