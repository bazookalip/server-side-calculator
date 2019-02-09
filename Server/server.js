let PORT = 5000;

let add = [];


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
    calculateAnswer();   
    add.push(req.body);
    res.sendStatus(201);
});


app.listen(PORT, () => {
    console.log('Running on port', PORT);
});


function calculateAnswer() {
    if (newSet.operator === '+') {
        newSet.answer = (parseInt(newSet.firstValue)) + (parseInt(newSet.secondValue));
    }
    if (newSet.operator === '-') {
        newSet.answer = (parseInt(newSet.firstValue)) - (parseInt(newSet.secondValue));
    }
    if (newSet.operator === '*') {
        newSet.answer = (parseInt(newSet.firstValue)) * (parseInt(newSet.secondValue));
    }
    if (newSet.operator === '/') {
        newSet.answer = (parseInt(newSet.firstValue)) / (parseInt(newSet.secondValue));
    }
    
    console.log(add);

}