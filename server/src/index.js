const express = require('express')
const http = require('http');
const cors = require('cors');
const router = require('./routes/index')
const CONST = require('./config/const')

const app = express()
const port = CONST.express.port

app.use(cors());
app.use(express.json());
app.use(router);

const server = http.createServer(app);
server.listen(port,  () => console.log(`Server listening at http://localhost:${port}`));
