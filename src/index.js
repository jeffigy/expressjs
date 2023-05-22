//registered groceries route, if not register url will return 404
const groceriesRouter = require('./routes/groceries');
const marketsRouter = require('./routes/market');
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

// invoke the groceries router
// a very common pattern is to prefix all the routes defined in a router with /api
app.use('/api/groceries', groceriesRouter);
app.use('/api/markets', marketsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


