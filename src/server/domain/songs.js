const fs = require('fs')

const path = './music'

module.exports.get = function () {
    return new Promise((resolve, reject) => {
        fs.readdir(path, function (err, files) {
            if (err) {
                reject({
                    code: 500,
                    msg: err
                })
            } else {
                resolve(files)
            }
        })
    })
}

module.exports.find = function (id) {
    return new Promise(function (resolve, reject) {
        fs.readFile(`${path}/${id}`,'mp3', (err, file) => {
            if (err) {
                reject({
                    code: 500,
                    msg: err
                })
            } else {
                resolve(file)
            }
        })
    })
}
