const mongoose = require('mongoose');
const {Schema} = mongoose;

const staffSchema = new Schema({
    googleID:{
        type :String,
        default:"",
    },
    Name:{
        type :String,
        default:"Staff",
    }
});

mongoose.model('staff', staffSchema);