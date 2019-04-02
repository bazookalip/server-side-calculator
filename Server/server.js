let PORT = process.env.PORT || 5000;

let add = [];
let calculator = [] ;

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
    taco = req.body; 
    calculateAnswer();   
    add.push(req.body);
    res.sendStatus(201);
});

app.get('/calculator', (req, res) => {
    res.send(calculator)
});


app.post('/calculator', (req, res) => {
    console.log(req.body);
    taco = req.body;
    calculateAnswer();
    calculator.push(req.body);
    res.sendStatus(201);
})


app.listen(PORT, () => {
    console.log('Running on port', PORT);
});


function calculateAnswer() {
    if (taco.operator === '+') {
        taco.answer = (parseInt(taco.firstValue)) + (parseInt(taco.secondValue));
    }
    if (taco.operator === '-') {
        taco.answer = (parseInt(taco.firstValue)) - (parseInt(taco.secondValue));
    }
    if (taco.operator === '*') {
        taco.answer = (parseInt(taco.firstValue)) * (parseInt(taco.secondValue));
    }
    if (taco.operator === '/') {
        taco.answer = (parseInt(taco.firstValue)) / (parseInt(taco.secondValue));
    }

}