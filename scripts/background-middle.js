jQuery(document).ready(function () {
	var degress = 0,
		timer = setInterval(function() {

			degress++;
			jQuery('div.background-middle').css('background','linear-gradient('+ degress +'deg, #8c2b2b, #9bc5c3')

		}, 10000/360);

});