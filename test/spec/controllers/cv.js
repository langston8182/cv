'use strict';

describe('Controller: CvCtrl', function () {

  // load the controller's module
  beforeEach(module('cvApp'));

  var CvCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CvCtrl = $controller('CvCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CvCtrl.awesomeThings.length).toBe(3);
  });
});
