const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
app.get('/', (req, res) => {

    res.send(
        [
            {
                id: 1,
                name: 'John',
            },
            {
                id: 2,
                name: 'Doe',
            }
        ]
    );
});



app.get('/groceries', (req, res) => {
    res.send(
        [
            {
                id: 1,
                item: 'Milk',
            },
            {
                id: 2,
                item: 'Eggs',
            }
        ]
    )
}) 