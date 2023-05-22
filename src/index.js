const express = require('express');
const app = express();
const port = 5000;
//  use method allows you to add middleware to your application's 
//  request processing pipeline
app.use(express.json());
//  parses incoming requests with URL-encoded payloads
app.use(express.urlencoded())
app.use((req, res, next) => {
    console.log('This is the first middleware');
    next();
})

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


app.get('/groceries', (res, req, next) => {
    // this is begin called before the next function
    console.log('before handling the request');
    // await console.log('before handling the request');
    // if the next function is not called, the request will be left hanging
    // and the function below will not be processed
    next();

}, (req, res) => {
    //next function is used to call the next middleware
    res.send(groceries)
})
app.get('/groceries/:id', (req, res) => {
    //destructure the id from the request parameters
    const { id } = req.params;
    //find the grocery item with the id
    const grocery = groceries.find((grocery) => grocery.id === parseInt(id));
    //if the grocery item is not found, return a 404 error
    if (!grocery) {
        res.status(404).send('Grocery item not found');
    }
    //if the grocery item is found, return the grocery item
    res.send(grocery);
})

app.post('/groceries', (req, res) => {
    console.log(req.body);
    res.send(201)
})