(function( window ) {
	'use strict';

	var app = angular.module('myTodoApp', []);

	app.controller('todoCtrl', function($scope) {
		$scope.todoList = [];

		$scope.addTodo = function() {
			$scope.todoList.push({task: $scope.todoInput, completed: false});
			$scope.todoInput = '';
		};
	});

})( window );
