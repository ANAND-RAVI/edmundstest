var app = angular.module('testApp',[]);

app.controller('testCtrl',function($scope,$http){
	$scope.message = "EDMUNDS TEST APP";

	$scope.vehicleData = "";
	$scope.showData = false;

	$scope.getVdata = function(){

		var make = $scope.make;
		var model = $scope.model;
		var year = $scope.year;

		var API_KEY = "5x6emuhqgqb689w6dp2uss4n";
		var API_PATH = "https://api.edmunds.com/api/vehicle/v2/"+make+"/"+model+"/"+year+"?fmt=json&api_key="+API_KEY;

		if(typeof make == 'undefined'){
			alert('error!, make not filled');
		}
		else if(typeof model == 'undefined'){
			alert('error!, model not filled');
		}
		else {
				$http
					.get(API_PATH)
					.then(
						function(response)
						{
							$scope.resultTitle = $scope.make;	
							$scope.showData = true;
							console.log(response);
							$scope.vehicleData = response.data.styles;
						},
						function(response)
						{
							alert(response.data.message);
							console.log(response);
						}
					);
		}
	};

});
