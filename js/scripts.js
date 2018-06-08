// Business Logic

// This function will take the user input and return a string base on specified Exceptions
// @parameter = numbers
// @return = string
var translate = function(number){
  var result = [];

// Check for each exceptions, using if, if else to cascade down from most important to least
  if(number < 0){
    return " This mission is too important for me to allow you to jeopardize it."
  }else if(number > 0 && number%3 === 0){
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if(number.toString().indexOf('1') > -1){
    return "Boop!";
  } else if(number.toString().indexOf('0') > -1){
    return "Beep!";
  } else {
    for(var i = 0; i <= number; i += 1){
      result.push(i);
    };
  }

  // Default array.toString() method make one long string with no spaces so output can't be wrap on browser.
  // So concatenate each array element with a space and comma. Add last element without comma
  var resultString = "";
  for(var i = 0; i < result.length -1 ; i+=1){
    resultString = resultString.concat(result[i], ", ");
  }
  resultString = resultString.concat(result[result.length-1]);

  return resultString;
}









// User interface
$(document).ready(function(){
  $('#input-form').submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($('input#user-input').val());
    var result = translate(inputNumber);
    $('#output').text(result);
    $('.output-area').show();
    $('#input-form').trigger('reset');
  });
});
