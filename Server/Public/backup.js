$(document).ready(onReady);

let operator;
let inputNumberConcatenate = '';
let inputFirst;
let inputSecond;

function onReady() {
    console.log('jquery is running');

    // get the current content from 'calculations' array of objects on the server and append to DOM
    getCalculation();

    // will store the current calculation operator to variable 'operator' based on button clicked on DOM
    $('.operator-btn').on('click', operatorClicked);

    // recives all number buttons that are clicked
    $('.number-btn').on('click', numberClicked);

    // will run upon click of the equals button on DOM
    $('#equals-submit-btn').on('click', submitCalculation);

    // clear user input fields when 'C' button is clicked
    $('#clear-btn').on('click', function () {
        $('#calc-display-text').empty();
    });
}

// store each clicked number button to variable 'inputNumberConcatenate' and append to DOM
function numberClicked() {
    console.log('number button clicked');
    inputButtonText = $(this).text();
    $('#calc-display-text').append(inputButtonText);
    inputNumberConcatenate += inputButtonText;
    console.log(inputNumberConcatenate);
}

// store the clicked operator button to variable 'operator' and append to DOM
function operatorClicked() {
    console.log('calc operator is:', $(this).text());
    operator = $(this).text();
    // appends operator to DOM
    $('#calc-display-text').append(`
    <span id="operator-text">
    ${operator}
    </span>`)
    // sets current string of 'inputNumberConcatenate' to 'inputFirst'
    inputFirst = inputNumberConcatenate;
    //clears out 'inputNumberConcatenate' for next number input
    inputNumberConcatenate = '';
}



// will send to server the inputs from calculator on DOM
function submitCalculation() {
    // sets current string of 'inputNumberConcatenate' to 'inputSecond'
    inputSecond = inputNumberConcatenate;
    console.log('equals/submit button clicked');

    $.ajax({
        method: 'POST',
        url: '/post-calculation',
        data: {
            inputFirst: inputFirst,
            operator: operator,
            inputSecond: inputSecond
        }
    }).then(function () {
        // get the current content from 'calculations' array of objects on the server and append to DOM
        getCalculation();
    })

    $('#calc-display-text').empty();
}



// get the current content from 'calculations' array of objects on the server and append to DOM
function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/get-calculation'
    }).then(function (response) {

        $('#calc-output-list').empty();
        console.log(response);

        response.forEach(function (calculations) {
            $('#calc-output-number').empty();
            $('#calc-output-number').append(`${calculations.calcTotal}
        `)
            $('#calc-output-list').append(`
        <li>${calculations.inputFirst} ${calculations.operator} ${calculations.inputSecond} &#x0003D ${calculations.calcTotal} 
        `);

        });
    })
}