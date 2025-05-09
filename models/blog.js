const mogoose = require('mongoose');
const Schema = mogoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Blog = mogoose.model('Blog', blogSchema);
module.exports = Blog;