const express = require('express');
const app = express();

const PORT = 4000

function handleListening() {
 console.log(`Listening on: http://localhost:${PORT}`) //${}쓰려면 따옴표 대신 `써야함
}

app.listen(PORT, handleListening);

