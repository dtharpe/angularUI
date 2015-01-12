function onGoogleReady (){
	angular.bootstrap(document.getElementsByTagName('body')[0], ['MyApp']);
};


angular.module('MyApp', ['ui.map '])
	.controller('MainController', function($scope){
		
		$scope.mapOptions = {
			center: new google.maps.LatLng(25.19, 55.27),
			zoom: 10
		};
});