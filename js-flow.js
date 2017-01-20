jQuery(function($) {

	var MAX_ELEMENTS = 20;

	var init = function() {
		setupTestDom();
		setupHandlers();
	}

	var setupHandlers = function() {
		$('#init-js').on('click', function() {
			initJSFlow();
		})

		$('#init-css').on('click', function() {
			initCSSFlow();
		})
	}

	var appendTestBox = function(selector) {
		var tBox = $('<div class="test-box"></div>');
		tBox.appendTo(selector);
		return tBox;
	}

	var createTestBoxes = function(parent) {
		var width = 10;
		var initialWidth;
		var zIndex = 20;
		var parent;
		var child;

		parent.addClass('main-parent');
		parent.addClass('test-color');
		parent.css('width', width + '%');
		initialWidth = parent.width();
		parent.css('z-index', zIndex);
		parent.height(parent.width());

		for (var i = 0; i < MAX_ELEMENTS - 1; i++) {
			width += 10;
			zIndex -= 1;

			child = appendTestBox(parent)

			if (i % 2 != 0) {
				child.addClass('odd-test');
			}
			child.css('width', initialWidth * (1 + (width / 100)));
			child.css('z-index', zIndex);
			child.height(child.width());
			parent = child;
		}
	}

	var setupTestDom = function() {
		var rightInitial = appendTestBox($('#right-container'));
		var leftInitial = appendTestBox($('#left-container'));
		createTestBoxes(rightInitial);
		createTestBoxes(leftInitial);
	}

	var initJSFlow = function() {

	}

	var initCSSFlow = function() {
		var lastContainer = $('.main-parent');
		var reverseRight = $('#right-container .test-box').get();
		reverseRight.shift();


		$(reverseRight).each(function() {
			$(this).css('background-color', 'inherit')
		});

	}

	init();
});