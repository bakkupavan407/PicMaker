define(['angular', 'angularUIRouter', 'controllers/loginController'], function(angular,angularUIRouter, loginController) {

	var angApp = angular.module('angApp', ['ui.router']);

	angApp.config(function($stateProvider, $urlRouterProvider){
		$stateProvider

		.state('home', {
			url: '/home',
			templateUrl: 'views/homeView.html',
			controller: 'LoginCtrl',
			controllerUrl: 'controllers/loginController'
		})
	});

    function start(){
    	angular.element(document).ready(function(){
    		angular.bootstrap(document, ['angApp']);
    	});
    }

    return {
    	start: start
    }

});
