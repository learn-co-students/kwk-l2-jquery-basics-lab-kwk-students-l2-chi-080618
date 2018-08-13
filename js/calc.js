//add your code here
$(document).ready(function(){
  doMath();
});

var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');
var res = $('#result');
var equals = $('#equals');

function doMath(){
$('#equals').on('click', function(){
  num1 = parseFloat(num1.val());
  num2 = parseFloat(num2.val());
  operator = operator.val();
  result(num1,num2,operator);
}) 
}


function result(num1,num2,operator){
  if (operator == "+"){
    let ans = num1 + num2;
    console.log(ans) }

  else if (operator == "-"){
    ans = num1 - num2;
    console.log(ans) }
  
  else if (operator == "*"){
    ans = num1 * num2;
    console.log(ans)}
    
  else if (operator == "/"){
    ans = num1 / num2;
    console.log(ans)}
 
}


function validate(operator,num1,num2){
  val_1=isNaN(num1);
  val_2=isNaN(num2);
  val_op=isNaN(operator);
  
  if (val_1 === false && val_2 === false && val_op === true){
    $('#equals').on('click',function(result){
    })}
    else {
      console.log("Sorry, one of those is not a valid number!")}
    }
  
 



