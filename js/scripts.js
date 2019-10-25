var result = '';
var hasOp = false;

function doMath(string) {
    var array = string.split(' ');
    var num1 = parseFloat(array[0]);
    var num2 = parseFloat(array[2]);
    var operator = array[1];

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '÷':
            return num1 / num2;
    }
}

function doMath(str) {
    return eval(str);
}

function opCheck(node) {
    if ($(node).attr('data-op')) {
        return true;
    } else {
        return false;
    }
}

function pressLogic(node) {
    const keyPress = node.id;

    if (keyPress === 'clr') {
        result = '';
        // hasOp = false;
    } else if (keyPress === '=') {
        result = doMath(result);
        if (result === 666) {
            goToHell();
        }
        // hasOp = false;
    } else if (opCheck(node) && result === '') {
        result = '';
    } else if (!hasOp && opCheck(node)) {
        result += ' ' + $(node).attr('data-op') + ' ';
        // hasOp = true;
    } else if (hasOp && opCheck(node)) {
        // console.log("Can't run two operators!");
    } else {
        result += keyPress;
    }
}

function goToHell() {
    $('#hell').css('opacity', '0.8');
    $('#calc').css('transform', 'rotateZ(180deg)');
    document.getElementById('satan-laughs').play();
}

$(document).ready(function() {
    $('div.key').click(function(e) {
        pressLogic(e.currentTarget);
        $('h3#display').text(result);
    });
});
