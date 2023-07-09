const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose // here our function return a promise
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB
//to avoid the depreciation errors we use obect and in object we use useNewUrlParser like elements

