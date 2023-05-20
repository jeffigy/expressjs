const express = require('express');
const app = express();
const port = 5000;
//  use method allows you to add middleware to your application's 
//  request processing pipeline
app.use(express.json());
//  parses incoming requests with URL-encoded payloads
app.use(express.urlencoded())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const groceries = [
    {
        id: 1,
        item: 'Milk',
    },
    {
        id: 2,
        item: 'Eggs',
    }
]


app.get('/groceries', (req, res) => {
    res.send(groceries)
})

app.post('/groceries', (req, res) => {
    console.log(req.body);
    res.send(201)
})