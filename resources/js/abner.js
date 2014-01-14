/*
 abnerjs v1.0.0
 (c) 2014 Abner Diaz. http://abnerick.wordpress.com
 License: MIT
*/
abnerjs= {};

//global variables
var $router= new router();


abnerjs.module= function(){ 
	var app= {};

	bootstrap();
	
	app.$scope = {};
	app.config= function( callback ){
		callback($router);
		return app;
	};

	app.controllers= new Array();	
	app.controller = function( name, callback){
		app.controllers[name] = callback;
		return app;
	};
	
	return app; 
};

//router constructor function
function router(){
	routerObj={};
	routerObj.routes = new Array();
	routerObj.when = function(view, template, ctrl){ 
		this.routes.push({url:view, templateUrl:template, controller: ctrl});
		return routerObj;
	};

	routerObj.dispatcher = function(url){ 
	
		var array = routerObj.routes;
		for(var i in array){
			if(url == array[i].url){
				 this.render(array[i].templateUrl, array[i].controller);
				 return;
			}
		}
		
	};
	routerObj.redirect = function(url){
		window.location.hash = url;
	}
	routerObj.render = function (template, controller){
		document.getElementById('view').innerHTML= 
							document.getElementById(template).innerHTML;

		//we get data from the scope of the controller
		ctrl = app.controllers[controller];
		$scope= {};
		ctrl($scope);
		//we iterate over the DOM changing the value of data-bind attributes
		bind($scope);
		
	};

	return routerObj;
};



function bind($scope){
	
	var d = document.getElementById('view');
	for(var i=0, end=view.childNodes.length; i< end; i++){
		if (d.childNodes[i].nodeType == 1){
			element = d.childNodes[i];
		        var variable = element.getAttribute('data-bind');
			if(variable != null){
		
				element.innerHTML = $scope[variable];
				element.name = variable;		
				
				//if element is a input we attach a listener
				if(element.tagName.toLowerCase() == "input"){
					element.addEventListener('keyup', function(e){
						//two way data binding
						$scope[this.name] = this.value;						
					});
				}
			}
			
		}
	}
}

function bootstrap(){

	//onhashchange event listener
	window.addEventListener('hashchange', function(){ 
		$router.dispatcher(window.location.hash);
	}, false);	
}

//util function 
function info(msg, rules){
 	div = document.getElementById('messages');
	div.className = rules;
	div.innerHTML = msg;	
}




