var app = angular.module("pomodoroApp", []);
app.controller("pomodoroCtrl", function ($scope, $interval) {
	$scope.breakTime = 5;
	$scope.sessionTime = 25;
	$scope.sessionName = "Session";
	$scope.breakName = "Break";
	$scope.isRunning = false;
	$scope.timeLeft = $scope.sessionTime; 
	$scope.currentName = $scope.sessionName;
	$scope.disableBtn = false;
	var promise;
	$scope.totalSec = $scope.timeLeft * 60;

	// Break Buttons
	$scope.minusBreakTime = function(){
		if($scope.breakTime < 1) {
			$scope.breakTime = 1;
		}
		$scope.breakTime--;

	}
	$scope.plusBreakTime = function(){
		$scope.breakTime++;
	}

	//Session Buttons
	$scope.minusSessionTime = function(){
		if($scope.sessionTime < 1) {
			$scope.sessionTime = 1;
		}
		$scope.sessionTime--;
		$scope.timeLeft = $scope.sessionTime; 
		$scope.totalSec = $scope.timeLeft * 60;
		// console.log("timeLeft: " + $scope.timeLeft);
		// console.log("totalSec: " + $scope.totalSec);
	}
	$scope.plusSessionTime = function(){
		$scope.sessionTime++;
		$scope.timeLeft = $scope.sessionTime; 
		$scope.totalSec = $scope.timeLeft * 60;
		// console.log("timeLeft: " + $scope.timeLeft);
		// console.log("totalSec: " + $scope.totalSec);
	}
	//-----------------------------//

	$scope.minusTimeLeft = function(){
		//$scope.timeLeft--;
		$scope.timeLeft = $scope.convertToTime($scope.totalSec);
		$scope.totalSec--;
	}

	$scope.toggleTimer = function() {
		$scope.isRunning = !($scope.isRunning);
		if($scope.isRunning == true){
			promise = $interval(function(){
				// Switching session
				if($scope.totalSec < 1){
					if($scope.currentName == $scope.sessionName) {
						$scope.currentName = $scope.breakName;
						$scope.timeLeft = $scope.breakTime;
						$scope.totalSec = $scope.timeLeft * 60;
					} else if($scope.currentName == $scope.breakName) {
						$scope.currentName = $scope.sessionName;
						$scope.timeLeft = $scope.sessionTime;
						$scope.totalSec = $scope.timeLeft * 60;
					}
				}

				// Disable plus/minus button while session is in progress.
				$scope.disableBtn = true; 

				$scope.minusTimeLeft();
			}, 1000);

		} else if($scope.isRunning === false) {
			// Pause the timer
			$interval.cancel(promise);
		}	
	}

	$scope.updateTimer = function(){
		console.log("Running Update Timer");
		if($scope.timeLeft < 1){
			if($scope.currentName == $scope.sessionName) {
				$scope.currentName = $scope.breakName;
				//console.log($scope.currentName);
				$scope.timeLeft = $scope.breakTime;
			} else {
				$scope.currentName = $scope.sessionName;
				//console.log($scope.currentName);
				$scope.timeLeft = $scope.sessionTime;
			}
		}
	}

	$scope.convertToTime = function(totalSec){
		var min = Math.floor(totalSec / 60);
		var sec = (totalSec %60);
		var minStr = "";
		if(min < 10){
			minStr =  "0" + min;
		} else {
			minStr = min;
		}
		var secStr = "";
		if(sec < 10){
			secStr = "0" + sec;
		} else if (sec == 60){
			secStr = "00";
		} else {
			secStr = sec;
		}
		var str = minStr +":" + secStr;
		return str;
	}
})