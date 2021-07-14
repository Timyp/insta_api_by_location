const express = require('express');
const router = express.Router();
const cors = require('cors')
const { PostsModel } = require("../models/instapostsModel");

router.get('/', cors(), (req, res) => {
    PostsModel.find((err, docs) => {
        if(!err) res.send(docs);
        else consol.log('Error to get data : ' + err);
    }).sort({date:-1});
})

module.exports = router