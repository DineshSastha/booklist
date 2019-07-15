var mongoose = require('mongoose');
var BookSchema = mongoose.Schema({

    isbn: {
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    published_year: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('book', BookSchema);