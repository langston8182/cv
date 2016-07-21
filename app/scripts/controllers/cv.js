'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:CvCtrl
 * @description
 * # CvCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('CvCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ];
  })
  .directive('showtab', function() {
    return {
      link: function($scope, element) {
          element.click(function (e) {
          	e.preventDefault();
          	element.tab('show');
          });
      }
    };
  });
