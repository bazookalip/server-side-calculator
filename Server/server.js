let PORT = 5000;

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/add', (req, res) => {
    res.send(add)
});

app.post('/add', (req, res) => {
    console.log(req.body);
    newSet = req.body;    
    calculateAnswer(newSet);
    add.push(req.body);
    res.sendStatus(201);
});


app.listen(PORT, () => {
    console.log('Running on port', PORT);
});

let add = [];

function calculateAnswer() {
   if(operator == '+')
    parseInt(firstValue) + parseInt(secondValue);  
};