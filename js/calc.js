//add your code here
$(document).ready(function(){
  doMath();
});
    

var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

 function result(num1, num2, operator) {
    var total = 0;
    
    if (operator === '+' )
    {
      total = num1 + num2;
    }
    
    else if (operator === '-' )
    {
      total = num1 - num2;
    }
    
    else if (operator === '*' )
    {
      total = num1 * num2;
    }
    else if (operator === '/' )
    {
      total = num1 / num2;
    }

    return total
    

    }
 // console.log(total)
  }

function doMath(){
  $("#equals").on('click', function(){
  num1new = parseFloat(num1.val());
  num2new = parseFloat(num2.val());
  operatornew = operator.val();
  
  let ans = result(num1new, num2new, operatornew)
  console.log(ans)

   $("#result").html(ans)
  
  });
 
}