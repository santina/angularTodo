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
					newTaskName : taskNameInput,
					completed: false, editing: false};
				$scope.todoInput = '';
			};
		};

		/*
			Check if .toggle-all needs to be checked (setting isAllCompleted to true) or unchecked
			Evoked whenever a list item (a task) is checked. 
		*/
		$scope.checkState = function(){
			var allSelected = true;
			angular.forEach($scope.todoList, function(task, taskId){
				allSelected = allSelected && task.completed;
			});
			$scope.isAllCompleted = allSelected;
		};

		/*
			Set all task's "completed" status in the todoList{} to true or false
			when #toggle-all is checked or unchecked 
		*/
		$scope.completeAll = function(){
			angular.forEach($scope.todoList, function(task, taskId){
				//isAllCompleted: false when not checked, true when checked
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

		$scope.startEditing = function(event) {
			var clickedTaskId = event.target.parentNode.parentNode.dataset.taskid;
			$scope.todoList[clickedTaskId].editing = true;
			//TODO: make it focus
		};

		$scope.doneEditing = function(event) {
			var clickedTaskId = event.target.parentNode.dataset.taskid;
			var task = $scope.todoList[clickedTaskId];
			task.editing = false;
			task.taskName = task.newTaskName;
		};

		$scope.remove = function(event){
			var clickedTaskId = event.target.parentNode.parentNode.dataset.taskid;
			delete $scope.todoList[clickedTaskId];
		};

		$scope.getLength = function(){
			return Object.keys($scope.todoList).length;
		};

		$scope.doBlur = function(event) {
			event.target.blur();
		};

	});

})( window );
