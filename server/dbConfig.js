const mongoose = require('mongoose');

const url = 'mongodb+srv://apnicoding72:RpRVlUg1kujCbidk@cluster0.x0d9gkb.mongodb.net/quote';
// RpRVlUg1kujCbidk

const dbConnect = async ()=>{
    try {
        await mongoose.connect(url);
        console.log('Mongodb connect succesfully')
    } catch (error) {
        console.log(error)
    } 
}

module.exports = dbConnect