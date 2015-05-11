(function( window ) {
	'use strict';

	var app = angular.module('myTodoApp', []);

	app.controller('todoCtrl', function($scope) {
		$scope.todoList = [];

		$scope.addTodo = function() {
			var taskName = $scope.todoInput.trim()
			if (taskName != '') {
				$scope.todoList.push({task: taskName, completed: false});
				$scope.todoInput = '';
			}
		};
	});

})( window );
