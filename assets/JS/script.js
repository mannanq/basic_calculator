// when suer clicks a number button, the value gets populated to the display div. when user clicks operator functions, a second number starts to get populated. Then when they click "=", two numbers are operated accordingly.

$(document).ready(function() {
  var num1, num2, val;

  num1 = 0;
  //num2 = 0;

  $('.number').on('click', function(val) {
    var disp_val = $(this).val();
    document.querySelector('.display').innerHTML += disp_val;
  });

  $('.operator').on('click', function() {
    num1 = document.querySelector('.display').innerHTML;
  });

  $('#clear').on('click', function() {
    $('.display').text('');
  });

  $('#operate').on('click', function() {
    operate(num1, num2);
  });
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  // function operate(a, b, action) {
  //   if(action === 'add')
  // }
});
