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
          "description": "name of the service instance should match ...",
          "validationMessage": "Only letters"          
        },
        "Description": {
          "title": "Description",
          "type": "string",
          "maxLength": 20,
          "validationMessage": "Max 20"
        },
        "bindable": {
          "title": "bindable",
          "type": "boolean"
        },
        "simpleUrl": {
          "title": "simpleUrl",
          "type": "string",
          "pattern": "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"        },
        "numbers": {
          "title": "numbers",
          "type": "number",
          "validationMessage": "Invalid number"
        },
        "email": {
          "title": "Email",
          "type": "string",
          "pattern": "^\\S+@\\S+$",
          "validationMessage": "Invalid Email."
        },
        "directory": {
          "title": "directory",
          "type": "string",
          "pattern": "^(.+)/([^/]+)$",
          "default": "/var/vcap/store/cassandra", 
          "validationMessage": "Invalid directory."
        },
        "title": {
          "type": "string",
          "enum": ['dr','jr','sir','mrs','mr','NaN','dj']
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
    this.schema = $scope.schema;

    $scope.model = {};
  });
