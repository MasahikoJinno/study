const functions = require('firebase-functions');
const express = require("express");

const app = express();

app.get('/users', (req, res) => {
  const users = [
    { "id": 1, "name": "イリヤ" },
    { "id": 2, "name": "美遊" },
    { "id": 3, "name": "クロエ" },
    { "id": 4, "name": "オルタ" },
    { "id": 5, "name": "マシュ" }
  ];
  res.send(JSON.stringify(users));
});


const api = functions.https.onRequest(app);
module.exports = { api };
