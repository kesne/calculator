var result = "";

function doMath(string) {
  var array = string.split(' ');
  var num1 = parseInt(array[0]);
  var num2 = parseInt(array[2]);
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

$(document).ready(function() {
  $("div.key").click(function() {
    if (this.id === "clr") {
      result = "";
    } else if (this.id === "=") {
      result = doMath(result);

    } else {
      result += this.id;
    }

    $("h3#display").text(result);

  });
});
