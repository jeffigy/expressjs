const { Router } = require('express');
const router = Router();

const marketList = [
    {
        id: 1,
        name: 'market 1 ',
        location: 'location 1',
    },
    {
        id: 2,
        name: 'market 2',
        location: 'location 2',
    },
]

router.get('', (req, res) => {
    res.send(marketList);
});
module.exports = router;