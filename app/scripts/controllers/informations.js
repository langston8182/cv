'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:InformationsCtrl
 * @description
 * # InformationsCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('InformationsCtrl', function ($scope, serviceAjax) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var currIndex = 0;
    $scope.slides = [];
    $scope.slides.push({
    	image: 'images/arduino.jpg',
    	id: currIndex++,
    	text: '96%'
    });
    $scope.slides.push({
    	image: 'images/iot.jpg',
    	id: currIndex++,
    	text: '94%'
    });
    $scope.envoyer = function() {
        serviceAjax.message($scope.message).then(function() {
          reset();
        }, function(err) {
          throw(err);
        });
    };

    function reset() {
        $scope.message = {};
    }
  });
