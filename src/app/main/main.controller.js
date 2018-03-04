(function() {
  'use strict';

  angular
    .module('codingTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, toastr, MainService) {

    $scope.userDetails = {};
    $scope.search = "";

    var loadUserRepo = function(userName) {
      MainService.getUserRepo(userName).then(function(data) {        
        $scope.userDetails.repoList = data;
      }, function() {

      })
    };

    var loadUserDetails = function(userName) {
      MainService.getUserDetails(userName).then(function(data) {        
        $scope.userDetails = data;
        loadUserRepo(userName);    
      }, function() {

      })
    };
    
    var loadGitubUsers = function() {
      MainService.getUsers().then(function(data) {
        $scope.dataList = data;

        if (data && data[0] && data[0].login) {
          loadUserDetails(data[0].login);
        }
      }, function() {

      })
    };

    loadGitubUsers();

    $scope.onClickUser = function(obj) {
      loadUserDetails(obj.login);
    };

    $scope.onSearch = function() {
      if ($scope.search) {
        MainService.getSearchUsers($scope.search).then(function(data) {
          $scope.dataList = data.items;

          if (data.items && data.items[0] && data.items[0].login) {
            loadUserDetails(data.items[0].login);
          }
        }, function() {

        })  
      } else {
        loadGitubUsers();
      }
      
    };

  }
})();
