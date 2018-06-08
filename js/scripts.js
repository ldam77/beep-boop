// Business Logic

var translate = function(number){
  var result = [];

  if(number < 0){
    return " This mission is too important for me to allow you to jeopardize it."
  }else if(number > 0 && number%3 === 0){
    return "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if(number.toString().indexOf('1') > -1){
    return "Boop!";
  } else if(number%10 === 0){
    return "Beep!";
  } else {
    for(var i = 0; i <= number; i += 1){
      result.push(i);
    };
  }
  return result.toString();
}









// User interface
$(document).ready(function(){
  $('#input-form').submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($('input#user-input').val());
    var result = translate(inputNumber);
    $('#output').text(result);
    $('#input-form').trigger('reset');
  });
});
