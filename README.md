abnerjs
========================

This is a project to show how Javascript Frameworks work.
I setup a pure javascript example with the idea behind:

* data binding
* hash routes 
* templates
* controllers

> Enjoy this sexy library!

Example
=========
Check this simple example

     var app= abnerjs.module()
	.config( function($router){
		$router.when("#home", 'home', 'homeCtrl')
		       .when("#about", 'about', 'aboutCtrl');
	})
	.controller('homeCtrl', function($scope){
		$scope.greeting = "welcome to abnerjs";
	})
	.controller('aboutCtrl', function($scope){
		$scope.greeting = "see you in the road";
	});

Documentation
==============


*abnerjs.module()*                 
to create a new app 
 
*config(func)*                     
to setup our routes   

*$router.when(hash,template,ctrl)*   
to register a route  

*$router.redirect()*   
to redirect to the default view

*controller(name, func)*        
to register a controller   

*'template id="about" (html tag)*  
to declare a template

*'data-bind' (html attribute)*  
to bind a variable

Tutorial
==============

I write a getting started tutorial in my [blog](http://abnerick.wordpress.com/2014/01/14/getting-started-with-abnerjs/ "Planet")

Pitfalls 
=========

1. **issue**: not all the browsers support the onhashchange event  
state: resolved - we will use a fallback script

Bugs
=========

1. **bug**: onhashchange fires twice  
state: open

Author
=========
Abner Díaz  [@abnerick](https://twitter.com/abnerick "abnerick")

License
=========
This project in under terms of the MIT License
