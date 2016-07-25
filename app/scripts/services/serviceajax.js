'use strict';

/**
 * @ngdoc service
 * @name cvApp.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the cvApp.
 */
angular.module('cvApp')
  .factory('serviceAjax', function ($http) {
    return {
      message: function (message) {
        return $http.post('http://localhost:3000/message/', message);
      }
    };
  });
