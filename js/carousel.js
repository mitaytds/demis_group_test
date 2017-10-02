$(document).ready(function() {
	var leftUIEl = $('.arrow_left');
	var rightUIEl = $('.arrow_right');
	var elementList = $('.carousel');

	var pixelOffset = 240;
	var currentLeftValue = 0;
	var elementsCount = elementList.find('li').length;
	var minimumOffset = - ((elementsCount - 4) * pixelOffset);
	var maximumOffset = 0;

	leftUIEl.click(function() {
		/* Act on the event */
		if (currentLeftValue != maximumOffset) {
		currentLeftValue += 240;
		elementList.animate({ left : currentLeftValue + "px"}, 500);
		}
	});
	rightUIEl.click(function() {
		/* Act on the event */
		if (currentLeftValue != minimumOffset) {
		currentLeftValue -= 240;
		elementList.animate({ left: currentLeftValue + "px"}, 500);
		}
	});
});