var myApp=angular.module('gjracksApp',['ngRoute','listApp']);
myApp.config(function($routeProvider) {
	 $routeProvider
	 .when('/', {
        templateUrl: 'list.html',
        controller: 'listCtrl'
    })
	 .when('/details',{
	 	templateUrl: 'details.html',
	 	controller: 'detailsCtrl'
	 })
	 .when('/checkout',{
	 	templateUrl: 'checkout.html'
	 })
	.otherwise({
        templateUrl: 'list.html',
        controller: 'listCtrl'
    });
})
