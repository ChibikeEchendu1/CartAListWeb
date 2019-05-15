const mongoose = require('mongoose');
const {Schema} = mongoose;
const StoreItemSchema = require('./StoreItem')

const StoreSchema = new Schema({
    Name:{
        type :String,
        default:"Staff",
    },
    Location:String,
    Log: Number,
    Lat: Number,
    Address: String,
    Number: Number,
    WebSite: String,
    StoreItems:{
        type :[StoreItemSchema],
        default:null,
    },
});

mongoose.model('store', StoreSchema);