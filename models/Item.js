const mongoose = require('mongoose');
const {Schema} = mongoose;

const ItemSchema = new Schema({
    Name:{
        type :String,
        default:"Staff",
    },
    Sizes:[String],
});

mongoose.model('item', ItemSchema);