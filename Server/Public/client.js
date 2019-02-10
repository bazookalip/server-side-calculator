$(document).ready(onReady);

let operator;
let inputNumberConcatenate = '';
let firstValue;
let secondValue;


function onReady(){
    console.log('ready!');

    $('#addButton').on('click', add);
    $('#subtractButton').on('click', subtract);
    $('#multiplyButton').on('click', multiply);
    $('#divideButton').on('click', divide);
    $('#equalsButton').on('click', equals);
    $('#clearButton').on('click', clear);
    
    $('.number').on('click', numberClicked);
   
    $('.operator').on('click', operatorClicked);

    $('#C').on('click', empty);
    $('#equalz').on('click', equalz);
   



}

function add(){    
  $.ajax({
        method: 'POST',
        url: '/add',
        data: { 
            firstValue: $('#firstValue').val(),
            operator: '+',
            secondValue: $('#secondValue').val()

             }
    }).then(function () {       
         
    });
}

function subtract(){
    console.log('subract');  
    $.ajax({
        method: 'POST',
        url: '/add',
        data: {
            firstValue: $('#firstValue').val(),
            operator: '-',
            secondValue: $('#secondValue').val()
        }
    }).then(function () {
    });
}

function multiply(){
    console.log('multiply');
    $.ajax({
        method: 'POST',
        url: '/add',
        data: {
            firstValue: $('#firstValue').val(),
            operator: '*',
            secondValue: $('#secondValue').val()
        }
    }).then(function () {

    });
}

function divide (){
    console.log('divide');
    $.ajax({
        method: 'POST',
        url: '/add',
        data: {
            firstValue: $('#firstValue').val(),
            operator: '/',
            secondValue: $('#secondValue').val()
        }
    }).then(function () {

    });
}

function equals (){
    $.ajax({
        method: 'GET',
        url: '/add'
    }).then(function (response) {
        console.log(response);
        $('#output').empty();
        response.forEach((number) => {
            $('#output').append(`
             ${number.firstValue} 
             ${number.operator}
             ${number.secondValue} = 
             ${number.answer}</br>
        `)
        });
        clear();

    })

}


function clear(){
    $('#firstValue').val('');
    $('#secondValue').val('');
}

//////////  2nd calculator   ////////////

function numberClicked() {
    console.log('number button clicked');
    inputButtonText = $(this).text();
    $('.input').append(inputButtonText);
    inputNumberConcatenate += inputButtonText;
    console.log(inputNumberConcatenate);
}


function operatorClicked() {
    console.log('calc operator is:', $(this).text());
    operator = $(this).text();
    $('.input').append(operator);
    firstValue = inputNumberConcatenate;
    inputNumberConcatenate = '';
}
   

function empty() {
    $('.input').empty();
}


function equalz() {
    let value = $('.input').text()
    console.log(value);
    secondValue = inputNumberConcatenate;
    console.log('equals/submit button clicked');

    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
            firstValue: firstValue,
            operator: operator,
            secondValue: secondValue
        }
    }).then(function () {
        getCalculation();
    })


}



function getCalculation() {
    $.ajax({
        method: 'GET',
        url: '/calculator'
    }).then(function (response) {

        $('.calcOutput').empty();
        console.log(response);

        response.forEach(function (number) {
           $('.calcOutput').empty();
            $('.calcOutput').append(`
             ${number.firstValue} 
             ${number.operator}
            ${number.secondValue} =
             ${number.answer}</br>
        `)

        });
    })
}

