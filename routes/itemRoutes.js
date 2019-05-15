const requireLogin = require('../middlewares/requireLogin')
const mongoose = require('mongoose');
const Category = mongoose.model('category');
const Store = mongoose.model('store');
const Item = mongoose.model('item')
module.exports = app =>{
    app.post('/api/items',/* requireLogin ,*/ async (req,res)=>{
        const {Name,Sizes} = req.body;
        const Size2 = Sizes.split(',').map(item => item.trim())

        const ItemUser = await Item.findOne({Name:Name})
        if (ItemUser) {
        res.send("old item")
        }else{
        const item = await new Item({Name:Name,Sizes: Size2}).save()
        res.send(item)
        }

    });


    app.post('/api/category',requireLogin,(req,res)=>{
        const {Name} = req.body;

        const category = new Category({
            Name,
        })
     });

     app.post('/api/storeitem' ,requireLogin ,async (req,res)=>{
        const {Name,Id,Sizes,Prices} = req.body;
        //console.log(Sizes);
        
        const Size2 = Sizes.split(',').map(item => item.trim())
        const Prices2 = Prices.split(',').map(item => parseInt(item.trim()))
       // Store.update({_id: req.user.Store},{$set:{}})
        console.log(req.user.Store,"id");
        console.log(Size2,"sizes");
        console.log(Prices2,"prices");
          await Store.find({_id: req.user.Store, 'StoreItems.Name': {$exists: false}}).updateOne(
            {$addToSet: {StoreItems: {Name: Name, Id:Id,Sizes:Size2, Prices:Prices2}}}).save() 


          await   Store.find({_id: req.user.Store, 'StoreItems.Id': '3487348987'}).updateOne(
                {$set: {StoreItems: {Name: Name, Id:Id,Sizes:Size2, Prices:Prices2}}}).save();

          await   Store.find({_id: req.user.Store, 'StoreItems.Id': {$ne: "456456456"}}).updateOne(
                {$addToSet: {StoreItems: {Name: Name, Id:Id,Sizes:Size2, Prices:Prices2}}}).save();

             console.log(Sizes);
             
        })

     app.post('/api/store' ,requireLogin ,async (req,res)=>{
        console.log(req.body);
        console.log("dfgdhgh");
        const {Name,Location,Log,Lat,Address,Number,Website} = req.body;
        
        
        
        const store = await new Store({
            Name,
            Location,
            Lat,
            Log,
            Address,
            Number,
            Website,
        }).save();

        req.user.Store = store.id
        console.log(store.id);
        
       const Staff = await req.user.save();
       console.log(req.user.Store);
        

        res.send("dfsdfdfg");
        
    });
};