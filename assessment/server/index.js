const express = require("express");
const app = express();
const port = 1337;
const morgan = require('morgan')
const bodyParser = require('body-parser')
const router = require('./router')
const cors = require('cors')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/',router)



app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

