const express = require('express');
const app = express();

const PORT = 4000

function handleListening() {
 console.log(`Listening on: http://localhost:${PORT}`) //${}쓰려면 따옴표 대신 `써야함
}

function handleHome(req, res) {
    res.send("hello from home")
}

function handleProfile(req, res) {
    res.send("This is Profile")
}

app.get("/", handleHome)

app.get("/profile", handleProfile)

app.listen(PORT, handleListening);