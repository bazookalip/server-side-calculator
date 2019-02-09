$(document).ready(onReady);


function onReady(){
    console.log('ready!');

    $('#addButton').on('click', add);
    $('#subtractButton').on('click', subtract);
    $('#multiplyButton').on('click', multiply);
    $('#divideButton').on('click', divide);
    $('#equalsButton').on('click', equals);
    $('#clearButton').on('click', clear);
}

function add(){    
  $.ajax({
        method: 'POST',
        url: '/add',
        data: { firstValue: $('#firstValue').val(),
                operator: '+',
                secondValue: $('#secondValue').val()
             }
    }).then(function () {
         getNumber();
         clear()
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
        getNumber();
        clear();

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
        getNumber();
        clear();

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
        getNumber();
        clear();

    });
}

function equals (){
    console.log('equals');
}


function clear(){
    $('#firstValue').val('');
    $('#secondValue').val('');
}

function getNumber(){
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
    })
}

