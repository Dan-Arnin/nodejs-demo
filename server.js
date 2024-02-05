const express = require('express');
const databaseconnection = require('./db_server');
const db = new databaseconnection();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/authors', (req, res) => {
    db.retrieve_authors((authors)=>{
        res.json(authors);
    });
  })

app.get('/books', (req, res) => {
    db.retrieve_books((books)=>{
        res.send(books);
    });
})

app.use(express.json()); 
app.post('/authorbyid', (req, res) => {
    const requestBody = req.body;
    var name = requestBody.name;
    db.retrieve_author_by_id(name,(result)=>{
        res.json(result);
    });
    console.log('Received POST request with body:', requestBody);
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })