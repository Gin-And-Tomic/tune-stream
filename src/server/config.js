const config = {
    libaryPath: "/home/thom/dev/repos/tune-stream/music"
}

//Local config
try{
    const local = require('../../config.local')
    Object.assign(config, local)
} catch(err) {
    console.log('no local config present', err)
}

module.exports = config