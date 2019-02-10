
$('#7').on('click', seven);
$('#8').on('click', eight);
$('#9').on('click', nine);
$('#plus').on('click', plusCalc);

$('#4').on('click', four);
$('#5').on('click', five);
$('#6').on('click', six);
$('#minus').on('click', minusCalc);

$('#1').on('click', one);
$('#2').on('click', two);
$('#3').on('click', three);
$('#multiply').on('click', multiplyCalc);

$('#0').on('click', zero);
$('#C').on('click', empty);
$('#equalz').on('click', equalz);
$('#slash').on('click', divideCalc);




function seven() {
    $('.input').append('7');
};

function eight() {
    $('.input').append('8');
};

function nine() {
    $('.input').append('9');
};

function plusCalc() {
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
function minusCalc() {
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
function multiplyCalc() {
    $('.input').append('*');
};

function zero() {
    $('.input').append('0');
};

function empty() {
    $('.input').empty();
}

function equalz() {
    $('.input').append('=');
};

function divideCalc() {
    $('.input').append('/');

};