const express = require('express')
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

router.route("/:id")
    .get((req, res) => {
        var id = req.params.id;
        console.log("Recieved GET for songs:", id);

        const fullPath = `${config.libaryPath}/${id}`

        const stat = fs.statSync(fullPath)
        res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Content-Length': stat.size
        });

        fs.createReadStream(fullPath).pipe(res);
    })
module.exports = router
