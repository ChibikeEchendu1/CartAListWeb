const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    
    googleID: { 
        type: String,
        default: ""
    },
    Name:{
        type :String,
        default:"User",
    }
   /*  facebookID: { 
        type: String,
        default: ""
    },
    email: { 
        type: String,
        default: ""
    },
    password: { 
        type: String,
        default: ""
    },
    Location: { 
        type: String,
        default: ""
    }, */
});

mongoose.model('users', userSchema);