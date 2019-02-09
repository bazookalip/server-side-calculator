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
                secondValue: $('#secondValue').val()
             }
    }).then(function () {
         getAdd();
    });
   

}

function subtract(){
    console.log('subract');  
}

function multiply(){
    console.log('multiply');
    
}

function divide (){
    console.log('divide');
    
}

function equals (){
    console.log('equals');
}


function clear(){
    $('#firstValue').val('');
    $('#secondValue').val('');
}

function getAdd(){
    $.ajax({
        method: 'GET',
        url: '/add'
    }).then(function (response) {
        console.log(response);
        $('#output').empty();
        response.forEach((number) => {
            $('#output').append(`
             ${number.firstValue} +
             ${number.secondValue} = 
             ${number.total} <br>
        `)

        });

    })
}