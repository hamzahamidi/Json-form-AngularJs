'use strict';

angular.module('myApp.view1', ['ngRoute', 'schemaForm'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'FormController'
    });
  }])


  .controller('FormController', function ($scope) {
    $scope.schema = {
      "type": "object",
      "title": "Comment",
      "properties": {
        "name": {
          "title": "Name",
          "type": "string",
          "pattern": "^[a-zA-Z]+$",
          "description": "Valid name."
        },
        "numbers": {
          "title": "numbers",
          "type": "number",
          "validationMessage": "Valid number"
        },
        "email": {
          "title": "Email",
          "type": "string",
          "pattern": "^\\S+@\\S+$",
          "description": "Valid Email."
        },
        "comment": {
          "title": "Comment",
          "type": "string",
          "maxLength": 20,
          "validationMessage": "Max 20"
        }
      },
      "required": [
        "name",
        "email",
        "comment"
      ]
    };

    $scope.form = [
      "*",
      {
        type: "submit",
        title: "Save"
      }
    ];

    $scope.model = {};
  });