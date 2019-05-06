const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const mongoose = require('mongoose');


const Staff = mongoose.model('staff');

passport.serializeUser((staff,done)=>{
    done(null, staff.id);
});

passport.deserializeUser((id,done)=>{
    Staff.findById(id).then(staff => {
        done(null,staff);
    });
});

passport.use(new GoogleStrategy({
    clientID:keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},(accessToken, refreshToken,profile,done)=>{
    Staff.findOne({googleID: 'hdrgjdgfkjnhdfjkerergnk'}).then((existingUser)=>{
    
        if (existingUser) {
            done(null,existingUser);
        }
        else{
            new Staff({googleID: profile.id, Name: profile.displayName}).save().then(staff =>
                
                done(null,staff)
            );
            
        
        }
    })
}));