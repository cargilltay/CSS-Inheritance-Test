jQuery(function($) {

	var MAX_ELEMENTS = 25;

	var init = function() {
			setupTestDom();
	}

	var setupTestDom = function() {
			for (var i = 0; i < MAX_ELEMENTS - 1; i++){
				$('<div class="row">' +


					'</div>').appendTo($('#container-main'));
			}
	}

	init();
});