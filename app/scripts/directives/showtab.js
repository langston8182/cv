'use strict';

/**
 * @ngdoc directive
 * @name cvApp.directive:showtab
 * @description
 * # showtab
 */
angular.module('cvApp')
  .directive('showtab', function () {
    return {
      link: function postLink(scope, element) {
        element.click(function (e) {
          	e.preventDefault();
          	element.tab('show');
        });
      }
    };
  });
