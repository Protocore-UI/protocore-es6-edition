define(["signals", "hasher", "crossroads"], function(signals, hasher, crossroads) {

	'use strict';

	var router = crossroads.create();

	var parseHash = function(newHash) {
		router.parse(newHash);
	};

	router.addRoute('', function() {
		console.log("Home View");
		require(['apps/views/homeView'], function(HomeView) {
			new HomeView();
		});
	});

	router.addRoute('/about', function() {
		console.log("About Us View");
		require(['apps/views/aboutView'], function(AboutView) {
			new AboutView();
		});
	});

	hasher.initialized.add(parseHash);
	hasher.changed.add(parseHash);
	hasher.init();

});