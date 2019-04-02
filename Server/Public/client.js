$(document).ready(onReady);

let operator;
let inputNumber = '';
let firstValue;
let secondValue;
let selectedOperator = '';


function onReady(){
    $('.operatorButton').on('click', operatorButton);
    $('#equalsButton').on('click', equals);
    $('#clearButton').on('click', clear);
    $('.number').on('click', numberClick);
    $('.operator').on('click', operatorClick);
    $('#C').on('click', empty);
    $('#equalz').on('click', equalz);
}

function operatorButton(){    
    selectedOperator = $(this).text();
    console.log(selectedOperator);
  $.ajax({
        method: 'POST',
        url: '/add',
        data: { 
            firstValue: $('#firstValue').val(),
            operator: selectedOperator,
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

function numberClick() {
    inputButtonText = $(this).text();
    $('.input').append(inputButtonText);
    inputNumber += inputButtonText;
    console.log(inputNumber);
}

function operatorClick() {
    console.log($(this).text());
    operator = $(this).text();
    $('.input').append(operator);
    firstValue = inputNumber;
    inputNumber = '';
}  

function empty() {
    $('.input').empty();
    inputNumber = '';
}

function equalz() {
    secondValue = inputNumber;
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: {
            firstValue: firstValue,
            operator: operator,
            secondValue: secondValue
        }
    }).then(function () {
        numberGetter();       
    })
    empty();
}

function numberGetter() {
    $.ajax({
        method: 'GET',
        url: '/calculator'
    }).then(function (response) {

        $('.calcOutput').empty();
        console.log(response);
        $('.calcOutput').empty();
        response.forEach(function (number) {
            $('.calcOutput').append(`
             ${number.firstValue} 
             ${number.operator}
             ${number.secondValue} =
             ${number.answer}</br>
        `)
            empty();
        });
    })
}

