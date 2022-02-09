const mongoose = require('mongoose');
const e = require('express');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', {useUnifiedTopology: true, useNewUrlParser: true}).then(() => {
    console.log('connected to mongo db successfully ');
}).catch((e) => {
    console.log('error occurred');
    console.log(e);
});


mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};