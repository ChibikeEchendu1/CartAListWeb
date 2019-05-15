module.exports = (req,res,next) =>{
    if(req.user.store<0){
        return res.status(401).send({error:'oga pick a store'})
    }

    next();
}