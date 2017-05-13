const express = require('express')
    , youtubeStream = require('youtube-audio-stream')
    , router = express.Router()
    , songs = require('../domain/songs')
    , fs = require('fs')
    , config = require('../config.js')


router.route("/")
    .get((req, res) => {
        console.log("Recieved GET for songs");
        songs.get()
            .then((resp) => {
                res.json(resp)
            })
            .catch((err) => {
                res.set("responseText", err.msg);
                res.sendStatus(err.code);
            })
    })

router.route("/library/:id")
    .get((req, res) => {
        const id = req.params.id;
        console.log("Recieved GET for songs:", id);

        const fullPath = `${config.libaryPath}/${id}`

        const stat = fs.statSync(fullPath)
        res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Content-Length': stat.size
        });

        fs.createReadStream(fullPath).pipe(res);
    })

router.route('/tube/:id')
    .get((req, res) => {
        const id = req.params.id;
        var requestUrl = `http://youtube.com/watch?v=${id}`
        try {
            youtubeStream(requestUrl).pipe(res)
        } catch (exception) {
            res.status(500).send(exception)
        }
    })
module.exports = router
