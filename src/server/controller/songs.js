var express = require('express'),
    router = express.Router(),
    songs = require('../domain/songs')

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
        songs.find(id)
            .then((resp) => {
                res.json(resp)
            })
            .catch((err) => {
                res.set("responseText", err.msg);
                res.sendStatus(err.code);
            })

    })
module.exports = router
