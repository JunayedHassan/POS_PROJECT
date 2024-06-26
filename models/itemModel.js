const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},
 {timestamp:true}
 );

 
 const Item = mongoose.model('Item', itemSchema);

 module.exports = Item;
