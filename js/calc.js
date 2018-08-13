//add your code here
$(document).ready(function(){
  doMath();
  //result();
});
var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');
var total = $('#result');


function doMath(){
  $('#equals').on('click', function(){
    num1 = parseFloat(num1.val());
    num2 = parseFloat(num2.val());
    console.log(num1)
    operator = operator.val();
	  result(operator,num1,num2);
  });
}

function result(operator,num1,num2){
  $('#equals').on('click', function(){
    let turkey;
    if (operator === "+") {
       turkey = num1 + num2;
    } else if (operator === "-") {
       turkey = num1 - num2;
    } else if (operator === "*") {
       turkey = num1 * num2;
    } else if (operator === "/") {
      turkey = num1 / num2;
    }
    });
  $("#result").val(turkey);
}
  
