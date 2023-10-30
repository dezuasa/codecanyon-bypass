const express = require("express");
const http = require('http');

const app = express();

const port = process.env.PORT || 3000;

const { handleRequest } = require('./app');
const server = http.createServer(handleRequest);

app.get("/", (req, res) => res.send("Ngapa Lo Ajg!"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
