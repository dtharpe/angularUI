angular.module('MyApp', ['ui.unique'])
	.controller('MainController', function($scope){
		$scope.items = [
			{id: 1, firstName: 'John', lastName: 'Smith'},
			{id: 2, firstName: 'Sally', lastName: 'Jones'},
			{id: 3, firstName: 'John', lastName: 'Does'},
			{id: 4, firstName: 'Keith', lastName: 'Smith'},
			{id: 5, firstName: 'Jenn', lastName: 'Does'},
			{id: 6, firstName: 'Steve', lastName: 'Irving'},
		];
});