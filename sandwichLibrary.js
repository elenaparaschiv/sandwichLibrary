//keywords: immediately invoked functions, objects, global variable, global window object, noConflict function
//noConflic


//if window has an original value
window.sandwichLibrary = 'This sandwichLibrary is a string';

//create a library System, with one global variable for all the example libraries we choose to create

(function(){
	//global variable
	var libraryStorage = {};

	//create a library system:
	function librarySystem(libraryName, callback){
		if(arguments.length > 1){
			libraryStorage[libraryName] = callback();		
		}else{
			return libraryStorage[libraryName];
		}
	}
	window.librarySystem = librarySystem;

})();

// create a library example, lets call it sandwich Library

(function(){
	var breads = {
		white: 'The unhealthy option',
		wheat: 'The healthy option'

	};

	var fillings = {
		turkey: 'The option with meat',
		cheese: 'The vegeterian option'
	};

	var sandwichLibrary = {
		breads: breads,
		fillings: fillings
	};


//To load the sandwichLibrary, there are 2 environments possible
	//1. If there is a library system
	if(typeof librarySystem !== 'undefined'){
		librarySystem('sandwichLibrary', function(){
			return sandwichLibrary;
		});		
	}else{
	//2. Else, load on the global window object
		// to ensure that sandwichLibrary library does not overrwrite the original value of window.sandwichLibrary we create a noConflict function
		var oldsandwichLibrary = window.sandwichLibrary;

		sandwichLibrary.noConflict = function(){
			window.sandwichLibrary = oldsandwichLibrary;
			return sandwichLibrary;
		}

		window.sandwichLibrary = sandwichLibrary; //
	}
})();
	//the 2nd sandwichLibrary library
	var sandwichJS = sandwichLibrary.noConflict();

	// we can console log to see the difference
	console.log(sandwichLibrary);
	console.log(sandwichJS.breads.wheat);
