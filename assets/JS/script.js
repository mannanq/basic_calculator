// when suer clicks a number button, the value gets populated to the display div. when user clicks operator functions, a second number starts to get populated. Then when they click "=", two numbers are operated accordingly.

$(document).ready(function() {
  var num1, num2, operatorChosen, operatorChosenRepeat;

  num1 = 0;
  num2 = 0;
  operatorChosen = '';

  $('.number').on('click', function(val) {
    var disp_val = $(this).val();
    document.querySelector('.display').innerHTML += disp_val;
  });

  $('.operator').on('click', function() {
    // check which operator is being clicked:
    operatorChosen = $(this).attr('id');
    operatorChosenRepeat = $(this).attr('id');

    console.log(operatorChosen);

    // store the number entered into num1 variable
    num1 = parseInt(document.querySelector('.display').innerHTML);

    // and then empty the screen for entering the next number
    $('.display').html('');

    //console.log(num1);
  });

  $('#clear').on('click', function() {
    num1 = 0;
    num2 = 0;
    operatorChosen = '';
    $('.display').text('');
  });

  $('#operate').on('click', function() {
    if (operatorChosen === '') {
      // operatorChosen = operatorChosenRepeat;
      // // current = num2;
      // operate(num1, num2, operatorChosen);
      alert('chose operator');
    } else {
      var current = parseInt(document.querySelector('.display').innerHTML);
      console.log(current);
      num2 = current;

      //console.log(typeof num2);
      console.log(typeof current);
      operate(num1, current, operatorChosen);
      //console.log(num1);
      operatorChosen = '';
    }
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
    if (b === 0) {
      return 'oops! b cannot be 0';
    } else {
      return a / b;
    }
  }

  function operate(number1, number2, operatorChosen) {
    if (operatorChosen === 'add') {
      num1 = add(number1, number2);
      $('.display').text(num1);
      //operatorChosen = '';
      //console.log(operatorChosen);
    } else if (operatorChosen === 'subtract') {
      $('.display').text(subtract(number1, number2));
      //operatorChosen = '';
    } else if (operatorChosen === 'multiply') {
      $('.display').text(multiply(number1, number2));
      //operatorChosen = '';
    } else if (operatorChosen === 'divide') {
      $('.display').text(divide(number1, number2));
      //operatorChosen = '';
    }
  }
});
