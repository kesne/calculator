var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = "";
var number2 = "";
var operation = "";

$(document).ready(function() {
  $("div.key").click(function() {
    if ( (this.id === "+") || (this.id === "-") || (this.id === "*") || (this.id === "/") ) {
      return;
    } else if (this.id === "clr") {
    } else {
    number1 = number1 + this.id;
    $("h3#display").text(number1);
    }
  });

  // $("h3#display").text(number1);
});
