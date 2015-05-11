(function( window ) {
	'use strict';

	var app = angular.module('myTodoApp', []);

	app.controller('todoCtrl', function($scope) {
		$scope.idCounter = 1;
		$scope.todoList = {};
		$scope.isAllCompleted = false;

		$scope.createId = function() {
			var oldIdCounter = $scope.idCounter;
			$scope.idCounter = oldIdCounter + 1;
			return oldIdCounter;
		};

		$scope.addTodo = function() {
			var taskNameInput = $scope.todoInput.trim();
			if (taskNameInput != '') {
				var taskId = $scope.createId()
				$scope.todoList[taskId] = {taskId: taskId, taskName: taskNameInput, 
					completed: false, editing: false};
				$scope.todoInput = '';
			};
		};

		$scope.checkState = function(){
			var allSelected = true;
			angular.forEach($scope.todoList, function(task, taskId){
				allSelected = allSelected && task.completed;
			});
			$scope.isAllCompleted = allSelected;
		};

		$scope.completeAll = function(){
			angular.forEach($scope.todoList, function(task, taskId){
				task.completed = $scope.isAllCompleted;
			});

		};

		$scope.clearCompleted = function() {
			var oldList = $scope.todoList;
			$scope.todoList = [];
			angular.forEach(oldList, function(task, taskId) {
				if (!task.completed) {
					$scope.todoList.push(task);
				}
			});
		};

		$scope.getNumCompleted = function() {
			var counter = 0;
			angular.forEach($scope.todoList, function(task, taskId) {
				if (task.completed) {
					counter++;
				}
			});
			return counter;
		};

		$scope.toggleEditing = function(event) {
			var clickedTaskId = event.target.parentNode.parentNode.dataset.taskid;
			$scope.todoList[clickedTaskId].editing = true;
		};
	});

})( window );
