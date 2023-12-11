const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    file: String,
    email: String,
})

const postModel = mongoose.model('post', postSchema)

module.exports = postModel;