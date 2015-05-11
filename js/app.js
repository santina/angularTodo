(function( window ) {
	'use strict';

	var app = angular.module('myTodoApp', []);

	app.controller('todoCtrl', function($scope) {
		$scope.todoList = [];
		$scope.isAllCompleted = false;

		$scope.addTodo = function() {
			var taskNameInput = $scope.todoInput.trim();
			if (taskNameInput != '') {
				$scope.todoList.push({taskName: taskNameInput, completed: false});
				$scope.todoInput = '';
			};
		};

		$scope.checkState = function(){
			var allSelected = true;
			angular.forEach($scope.todoList, function(task){
				allSelected = allSelected && task.completed;
			});
			$scope.isAllCompleted = allSelected;

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
