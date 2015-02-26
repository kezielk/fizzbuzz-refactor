$(document).ready(function() {
	$('#submit').on('click', function(e) {
		e.preventDefault();
		var number = +$('#mybutton').val();
 
		// make sure section is empty before clearing
		if (!$('section').is(':empty')) $('section').html('');

		// make sure span is empty before clearing message
		if (!$('h1').is(':empty')) $('h1').html('');

		// check if number is integer
		if (number % 1 === 0) {
			appendFizzBuzz(number);
		} else {
			$('h1').append('Input must be an integer.');
		}

	});
});
 
 var appendFizzBuzz = function (n) {
	for (var i = 1; i <= n; i++) {

		if (i % 15 === 0) {
			$('section').append('FizzBuzz');

		} else if (i % 3 === 0) {
			$('section').append('Fizz');

		} else if (i % 5 === 0) {
			$('section').append('Buzz');

		} else {
			$('section').append(i);
		}

		$('section').append('<br />');
	}
};