var app = angular.module("pomodoroApp", []);
app.controller("pomodoroCtrl", function ($scope, $interval) {
	$scope.breaktime = 5;
	$scope.sessiontime = 25;
	$scope.minusBreakTime = function(){
		if($scope.breaktime < 1) {
			$scope.breaktime = 1;
		}
		$scope.breaktime--;
	}
	$scope.plusBreakTime = function(){
		$scope.breaktime++;
	}
	$scope.minusSessionTime = function(){
		if($scope.sessiontime < 1) {
			$scope.sessiontime = 1;
		}
		$scope.sessiontime--;
	}
	$scope.plusSessionTime = function(){
		$scope.sessiontime++;
	}
})