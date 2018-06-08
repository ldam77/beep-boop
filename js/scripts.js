// Business Logic

var translate = function(number){
  var result = [];

  for(var i = 0; i <= number; i += 1){
    result.push(i);
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
