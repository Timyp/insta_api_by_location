const express = require('express');
const router = express.Router();
const cors = require('cors')
const { PostsModel } = require("../models/instapostsModel");
const fetch   = require('node-fetch');

//Opera garnier insta url
var url = 'https://www.instagram.com/explore/locations/236625674/opera-garnier?__a=1&max_id=end_cursor';

router.post('/getDatas', cors(), (req, res) => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            //Get last posts
            let edge_to_media = data.graphql.location.edge_location_to_media.edges;

            for (var i = 0; i < edge_to_media.length; i++) {
                let obj = edge_to_media[i].node;

                const updateRecord = {
                    created: obj.taken_at_timestamp
                };

                PostsModel.findOneAndUpdate(
                    { shortCode: obj.shortcode },
                    { $set: updateRecord },
                    { new: true, upsert: true }, (err, doc) => {
                    if (err) {
                        console.log("Something wrong when updating data!");
                    }
                });
            };

            //Get top posts
            // let edge_to_top_post = data.graphql.location.edge_location_to_top_posts.edges;
            // for (var i = 0; i < edge_to_top_post.length; i++) {
            //     let obj = edge_to_top_post[i].node;
            //
            //     const updateRecord = {
            //         created: obj.taken_at_timestamp
            //     };
            //
            //     PostsModel.findOneAndUpdate(
            //         { shortCode: obj.shortcode },
            //         { $set: updateRecord },
            //         { new: true, upsert: true }, (err, doc) => {
            //             if (err) {
            //                 console.log("Something wrong when updating data!");
            //             }
            //         });
            // };

            res.send('Data collected');
        })
        .catch(err => {
            console.log('Erreur lors de la récupération de datas ' . err);
        });
})

module.exports = router