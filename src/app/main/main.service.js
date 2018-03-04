(function() {
  'use strict';

  angular
    .module('codingTest')
    .service('MainService', function ($http,$q) {

    	var GET_USERS = "https://api.github.com/users";
    	var GET_USER_DETAILS = "https://api.github.com/users/";
    	var SEARCH_USERS = "https://api.github.com/search/users?q=";
    	var GET_USER_REPO = "https://api.github.com/users/";    	

    	this.getUsers = function() {
    		 var def = $q.defer();
			$http.get(GET_USERS).success(function(data){
				def.resolve(data);
			}) .error(function() {
				var erroMsg = "Failed to load GET_USERS";
				console.log(erroMsg);
				def.reject(erroMsg);
			});
	        return def.promise;
    	};

    	this.getUserDetails = function(userName) {
    		 var def = $q.defer();
			$http.get(GET_USER_DETAILS+userName).success(function(data){
				def.resolve(data);
			}) .error(function() {
				var erroMsg = "Failed to load GET_USER_DETAILS";
				console.log(erroMsg);
				def.reject(erroMsg);
			});
	        return def.promise;
    	};

    	this.getSearchUsers = function(userName) {
    		 var def = $q.defer();
			$http.get(SEARCH_USERS+userName).success(function(data){
				def.resolve(data);
			}) .error(function() {
				var erroMsg = "Failed to load SEARCH_USERS";
				console.log(erroMsg);
				def.reject(erroMsg);
			});
	        return def.promise;
    	};

		this.getUserRepo = function(userName) {
    		 var def = $q.defer();
			$http.get(GET_USER_REPO+userName+"/repos").success(function(data){
				def.resolve(data);
			}) .error(function() {
				var erroMsg = "Failed to load GET_USER_REPO";
				console.log(erroMsg);
				def.reject(erroMsg);
			});
	        return def.promise;
    	};  	

    });

})();
