const mongoose =require('mongoose');


const connectdb =async()=>{
    // let url=process.env.MONGO_URI;

    // console.log(url);
    await mongoose.connect("mongodb+srv://Sana:fRR5WaYfojskBJ4N@cluster0.w7osevc.mongodb.net/merndb",{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('db connected');
    })
    .catch((err)=>{
        console.error("errro in db connect")
    })
}

module.exports = connectdb