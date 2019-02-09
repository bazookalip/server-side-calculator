$(document).ready(onReady);


function onReady(){
    console.log('ready!');

    $('#addButton').on('click', add);
    $('#subtractButton').on('click', subtract);
    $('#multiplyButton').on('click', multiply);
    $('#divideButton').on('click', divide);
    $('#equalsButton').on('click', equals);
    $('#clearButton').on('click', clear);
    
    $('#7').on('click', seven);
    $('#8').on('click', eight);
    $('#9').on('click', nine);
    $('#plus').on('click', plus);

    $('#4').on('click', four);
    $('#5').on('click', five);
    $('#6').on('click', six);
    $('#minus').on('click', minus);
    
    $('#1').on('click', one);
    $('#2').on('click', two);
    $('#3').on('click', three);
    $('#multiply').on('click', multiply);

    $('#0').on('click', zero);
    $('#C').on('click', empty);
    $('#equals').on('click', equals);
    $('#slash').on('click', divides);



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


function seven (){
    $('.input').append('7');
};

function eight() {
    $('.input').append('8');
};

function nine() {
    $('.input').append('9');
};

function plus() {
    $('.input').append('+');
};

function four() {
    $('.input').append('4');
};
function five() {
    $('.input').append('5');
};

function six() {
    $('.input').append('6');
};
function minus() {
    $('.input').append('-');
};
function one() {
    $('.input').append('1');
};

function two() {
    $('.input').append('2');
};
function three() {
    $('.input').append('3');
};
function multiply() {
    $('.input').append('*');
};

function zero() {
    $('.input').append('0');
};

function empty (){
    $('.input').empty();
}

function equals() {
    $('.input').append('=');
};

function divides() {
    $('.input').append('/');
    
};