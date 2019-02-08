let PORT = 5000;

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/new', (req, res) => {
    res.send(wolves)
});

app.post('/new', (req, res) => {
    req.body;
    wolves.push(req.body);
    res.sendStatus(201);
});


app.listen(PORT, () => {
    console.log('Running on port', PORT);
});
