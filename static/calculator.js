


function plus(n1, n2){

    $('.display').html(n1+n2)
}


function difference(n1, n2){
    $('.display').html(n1-n2)
}

function multiply(n1, n2){
    $('.display').html(n1*n2)
}

function divide(n1, n2){
    $('.display').html(n1/n2)
}

function modulus(n1, n2){
    $('.display').html(n1%n2)
}

function square(n1,n2){
    $('.display').html(Math.pow(n1,n2))
}

function sqrt(n1,n2){
    $('.display').html(Math.sqrt(n1,n2))
}

function sin(n1){
    $('.display').html((Math.sin(n1).toFixed(4)))
}
function cos(n1){
    $('.display').html(Math.cos(n1))
}
function tg(n1){
    $('.display').html(Math.tan(n1))
}
function ctg(n1){
    $('.display').html(1/Math.tan(n1))
}