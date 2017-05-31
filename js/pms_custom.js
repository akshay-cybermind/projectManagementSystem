var pmsApp = angular.module('pmsApp', ['firebase']);

pmsApp

.run(function($rootScope,$firebaseArray) {
	// var myjyotish =new Firebase('https://myapp-90faa.firebaseio.com/jyotish/jyotish');
	// $rootScope.jyotishes=$firebaseArray(myjyotish);
	// console.log($rootScope.jyotishes);
})

.controller('CController', ['$scope','$rootScope','$firebaseArray','$log', function($scope,$rootScope,$firebaseArray,$log) {

	var myProjects = new Firebase('https://clientinfosys.firebaseio.com/project');

	$scope.projects = $firebaseArray(myProjects);

	$scope.showForm = function() {
		$scope.addFormShow = true;
		$scope.editFormShow = false;
		clearForm();
	}
	$scope.hideForm = function(){
		$scope.addFormShow = false;
	}

	function clearForm() {
		$scope.project_name = '';
		$scope.client_name = '';
		$scope.project_type = '';
		$scope.project_details = '';
		$scope.project_url = '';
		$scope.start_date = '';
		$scope.completion_date = '';
		$scope.budget = '';
		$scope.payment_mode = '';
	}

	$scope.addFormSubmit=function() {
		$scope.projects.$add({
			project_name:$scope.project_name,
			client_name:$scope.client_name,
			project_type:$scope.project_type,
			project_details:$scope.project_details,
			project_url:$scope.project_url,
			start_date:$scope.start_date,
			completion_date:$scope.completion_date,
			budget:$scope.budget,
			payment_mode:$scope.payment_mode
			});
		clearForm();
	}

	$scope.editData = function(project,id) {
		$scope.addFormShow = false;
		$scope.editFormShow = true;

		$scope.project_name = project.project_name;
		$scope.client_name = project.client_name;
		$scope.project_type = project.project_type;
		$scope.project_details = project.project_details;
		$scope.project_url = project.project_url;
		$scope.start_date = project.start_date;
		$scope.completion_date = project.completion_date;
		$scope.budget = project.budget;
		$scope.payment_mode = project.payment_mode;

		$scope.id=project.$id;  
	}

	$scope.showData = function(project,id) {
		$scope.detailsShow = true;

		$scope.project_name = project.project_name;
		$scope.client_name = project.client_name;
		$scope.project_type = project.project_type;
		$scope.project_details = project.project_details;
		$scope.project_url = project.project_url;
		$scope.start_date = project.start_date;
		$scope.completion_date = project.completion_date;
		$scope.budget = project.budget;
		$scope.payment_mode = project.payment_mode;

		$scope.id=project.$id;  
	}

	$scope.editFormSubmit=function() {
		var id=$scope.id;
		var record=$scope.projects.$getRecord(id);

		record.project_name=$scope.project_name;
		record.client_name=$scope.client_name;
		record.project_type=$scope.project_type;
		record.project_details=$scope.project_details;
		record.project_url=$scope.project_url;
		record.start_date=$scope.start_date;
		record.completion_date=$scope.completion_date;
		record.budget=$scope.budget;
		record.payment_mode=$scope.payment_mode;

		$scope.projects.$save(record);
	}

	$scope.deleteData=function(parent) {
		if (confirm('Are you sure you want to delete this?')) {
			$scope.projects.$remove(parent);
		}
	}
}]);