var result = "";
var hasOp = 0;

function doMath(string) {
  var array = string.split(' ');
  var num1 = parseFloat(array[0]);
  var num2 = parseFloat(array[2]);
  var operator = array[1];

  if (operator === "+") {
    return (num1 + num2);
  } else if (operator === "-") {
    return (num1 - num2);
  } else if (operator === "*") {
    return (num1 * num2);
  } else if (operator === "÷") {
    return (num1 / num2);
  }
}

function opCheck(keyPress) {
  if ((keyPress === " + ") || (keyPress === " - ") || (keyPress === " * ") || (keyPress === " ÷ ")) {
    return true;
  } else {
    return false;
  };
};

function pressLogic(keyPress) {
  if (keyPress === "clr") {
    result = "";
    hasOp = 0;
  } else if (keyPress === "=") {
    result = doMath(result);
    hasOp = 0;
  } else if (hasOp === 0 && opCheck(keyPress)) {
    result += keyPress;
    hasOp = 1;
  } else if (hasOp === 1 && opCheck(keyPress)) {
    console.log("Can't run two operators!");
  } else {
    result += keyPress;
  }
}

$(document).ready(function() {
  $("div.key").click(function() {
    pressLogic(this.id);
    $("h3#display").text(result);
  });
});
