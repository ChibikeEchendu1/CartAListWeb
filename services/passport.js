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
    callbackURL: '/auth/google/callback',
    proxy:true
},
async (accessToken, refreshToken,profile,done)=>{
 const existingUser = await Staff.findOne({googleID: 'hdrgjdgfkjnhdfjkerergnk'})
    
        if (existingUser) {
           return done(null,existingUser);
        }
        const staff = await new Staff({googleID: profile.id, Name: profile.displayName}).save()
               
                done(null,staff);
  
}));
