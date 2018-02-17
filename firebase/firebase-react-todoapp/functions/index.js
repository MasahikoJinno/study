const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');

// using firestore
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const app = express();

// using middleware
app.use(cors({ origin: true }));

// get todos endpoint
app.get('/todos', (req, res) => {
  const users = [
    { "id": 1, "content": "イリヤ", "done": false },
    { "id": 2, "content": "美遊",   "done": false },
    { "id": 3, "content": "クロエ", "done": false },
    { "id": 4, "content": "オルタ", "done": false },
    { "id": 5, "content": "マシュ", "done": false }
  ];
  res.send(JSON.stringify(users));
});

//  create todo endpoint
app.post('/todos/create', (req, res) => {
  const docRef = db.collection('todos').doc('test');


});

const api = functions.https.onRequest(app);
module.exports = { api };
