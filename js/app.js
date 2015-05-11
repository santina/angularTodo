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
			angular.forEach($scope.todoList, function(task){
				task.completed = $scope.isAllCompleted;
			});
		};

		$scope.clearCompleted = function() {
			var oldList = $scope.todoList;
			$scope.todoList = [];
			angular.forEach(oldList, function(task) {
				if (!task.completed) {
					$scope.todoList.push(task);
				}
			});
		};

		$scope.getNumCompleted = function() {
			var counter = 0;
			angular.forEach($scope.todoList, function(task) {
				if (task.completed) {
					counter++;
				}
			});
			return counter;
		};
	});

})( window );
