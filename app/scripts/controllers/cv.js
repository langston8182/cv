'use strict';

/**
 * @ngdoc function
 * @name cvApp.controller:CvCtrl
 * @description
 * # CvCtrl
 * Controller of the cvApp
 */
angular.module('cvApp')
  .controller('CvCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ];

  $scope.rate = 3;
  $scope.max = 5;
  $scope.isReadonly = true;
  $scope.titles = [];

  for (var i = 0; i <= $scope.max; i++) {
    $scope.titles.push('');
  }

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];

  $scope.competences = {
    cat: [
      {
        nomCat : 'Langages et frameworks',
        items: 
        [
          {nom: 'J2EE (Java, Spring, Hibernate)', rate: 3},
          {nom: 'Framework Javascript (NodeJS, AngularJS, ExpressJS)', rate: 3},
          {nom: 'Oracle', rate: 3},
        ]
      },
      {
        nomCat : 'Base de données et SGDB',
        items: 
        [
          {nom: 'SQL', rate: 3},
          {nom: 'MongoDB', rate: 3},
          {nom: 'WebServices', rate: 3},
        ]
      },
      {
        nomCat : 'Systèmes d\'exploitation',
        items: 
        [
          {nom: 'Linux (Red Hat, Solaris, Debian)', rate: 3},
          {nom: 'Mac OS X', rate: 3},
          {nom: 'WebServices', rate: 3},
        ]
      },
      {
        nomCat : 'Outils',
        items: 
        [
          {nom: 'Eclipse', rate: 3},
          {nom: 'Grunt', rate: 3},
          {nom: 'NPM', rate: 3},
          {nom: 'Talend', rate: 3},
          {nom: 'Virtual Box', rate: 3},
        ]
      },
      {
        nomCat : 'Gestion de configuration',
        items: 
        [
          {nom: 'SVN', rate: 3},
          {nom: 'GIT', rate: 3},
        ]
      },
      {
        nomCat : 'Modélisation',
        items: 
        [
          {nom: 'UML', rate: 3},
          {nom: 'SCRUMM', rate: 3},
          {nom: 'Modélio', rate: 3},
        ]
      },
    ]
  };
});