

var app= abnerjs.module()
	.config( function($router){
		$router.when("#home", 'home', 'homeCtrl')
		       .when("#about", 'about', 'aboutCtrl')
		       .redirect("#home");
	})
	.controller('homeCtrl', function($scope){
		$scope.title = "Welcome to abnerjs";
		$scope.hello = "";
	})
	.controller('aboutCtrl', function($scope){
		$scope.bye = "<strong>abnerjs</strong> is a small lib to show concepts of MVC on JS";
	});








