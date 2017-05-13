
const express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 8080
  , constroller = require('./controller')

app.use(express.static("public"));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});
app.use("/api", constroller)

app.listen(port, () => {
  console.log('Listening on port ' + port)
})
