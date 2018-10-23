jQuery(document).ready(function () {
	var degress = 0,
		timer = setInterval(function() {

			degress++;
			jQuery('div.background-middle').css('background','linear-gradient('+ degress +'deg, #333333, #E6E6E6')

		}, 30000/360);

});