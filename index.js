const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
var bodyParser = require('body-parser')
require('./models/User')
require('./models/Staff')
require('./models/Category')
require('./models/Store')
require('./models/Item')
require('./services/passport');
mongoose.connect(keys.mongoURI);

const User = mongoose.model('users')
const app = express();

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
);
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/itemRoutes')(app);

 if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));

    });
} 




const PORT = process.env.PORT || 5000; 
app.listen(PORT);