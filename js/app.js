(function( window ) {
	'use strict';

	var app = angular.module('myTodoApp', []);

	app.controller('todoCtrl', function($scope) {
		$scope.todoList = [];

		$scope.addTodo = function() {
			var taskNameInput = $scope.todoInput.trim();
			if (taskNameInput != '') {
				$scope.todoList.push({taskName: taskNameInput, completed: false});
				$scope.todoInput = '';
			};
		};

		$scope.completeAll = function(){
			console.log($scope.isAllCompleted);
			angular.forEach($scope.todoList, function(task){
				task.completed = $scope.isAllCompleted;
			});
		};
	});

})( window );
