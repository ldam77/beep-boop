// Business Logic

var translate = function(number){
  return number;
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
