var app = angular.module("pomodoroApp", []);
app.controller("pomodoroCtrl", function ($scope, $interval) {
	$scope.breakTime = 5;
	$scope.sessionTime = 25;
	$scope.sessionName = "Session";
	$scope.breakName = "Break";
	$scope.isRunning = false;
	$scope.timeLeft = $scope.sessionTime; 
	$scope.currentName = $scope.sessionName;
	var promise;

	// Button
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
	//-----------------------------//

	$scope.minusTimeLeft = function(){
		$scope.timeLeft--;
	}

	//promise =$interval($scope.minusTimeLeft(), 1000);
	$scope.toggleTimer = function() {
		$scope.isRunning = !($scope.isRunning);
		if($scope.isRunning == true){
			//promise = $interval($scope.minusTimeLeft, 1000);
			promise = $interval(function(){
				if($scope.timeLeft < 1){
					if($scope.currentName == $scope.sessionName) {
						$scope.currentName = $scope.breakName;
						console.log($scope.currentName);
						$scope.timeLeft = $scope.breakTime;
					} else if($scope.currentName == $scope.breakName) {
						$scope.currentName = $scope.sessionName;
						console.log($scope.currentName);
						$scope.timeLeft = $scope.sessionTime;
					}
				}
				$scope.minusTimeLeft();
			}, 1000);

		} else if($scope.isRunning === false) {
			$interval.cancel(promise);
		}	
	}

	$scope.updateTimer = function(){
		console.log("Running Update Timer");
		if($scope.timeLeft < 1){
			if($scope.currentName == $scope.sessionName) {
				$scope.currentName == $scope.breakName;
				//console.log($scope.currentName);
				$scope.timeLeft = $scope.breakTime;
			} else {
				$scope.currentName == $scope.sessionName;
				//console.log($scope.currentName);
				$scope.timeLeft = $scope.sessionTime;
			}
		}
	}




	// $scope.updateTimer = function(){
	// 	if($scope.name == "Session"){
	// 		$scope.timeLeft = $scope.sessionTime;
	// 		$scope.minusTimeLeft();
	// 		promise =$interval($scope.minusTimeLeft, 1000);
	// 		if($scope.timeLeft < 1) {
	// 			$scope.name = "Break";
	// 		}
	// 	}
	// 	if ($scope.name == "Break");
	// 		$scope.timeLeft = $scope.breakTime;
	// 		$scope.minusTimeLeft();
	// 		promise =$interval($scope.minusTimeLeft, 1000);
	// 		if($scope.timeLeft < 1) {
	// 			$scope.name = "Session";
	// 		}
	// }



})