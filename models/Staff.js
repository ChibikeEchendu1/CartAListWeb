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
    },
    Store:{
        type :String,
        default:"nostore",
    }
});

mongoose.model('staff', staffSchema);