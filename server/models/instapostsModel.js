const mongoose = require("mongoose");
const PostsModel = mongoose.model(
    "insta-api",
    {
        shortCode: {
            type: String,
            require: true
        },
        created : {
            type: Number,
            require: true
        }
    },
    "insta-posts"
);

module.exports = { PostsModel };