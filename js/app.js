var app = angular.module("pomodoroApp", []);
app.controller("pomodoroCtrl", function ($scope, $interval) {
	$scope.breaktime = 5;
	$scope.sessiontime = 25;
	$scope.sessionName = "Session";
	$scope.isRunning = false;
	$scope.timeLeft = $scope.sessiontime; 
	var promise;
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

	$scope.minusTimeLeft = function(){
		$scope.timeLeft--;
	}

	//promise =$interval($scope.minusTimeLeft(), 1000);
	$scope.toggleTimer = function() {
		
		$scope.isRunning = !($scope.isRunning);
		console.log("A: " + $scope.isRunning);
		if($scope.isRunning == true){
			$scope.minusTimeLeft();
			promise = $interval($scope.minusTimeLeft, 1000);
		} else if($scope.isRunning === false) {
			$interval.cancel(promise);
		}
		
		
	}



})