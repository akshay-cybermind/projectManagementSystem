var pmsApp = angular.module('pmsApp', ['firebase']);

pmsApp

.run(function($rootScope,$firebaseArray) {
	// var myjyotish =new Firebase('https://myapp-90faa.firebaseio.com/jyotish/jyotish');
	// $rootScope.jyotishes=$firebaseArray(myjyotish);
	// console.log($rootScope.jyotishes);
})

.controller('PrController', ['$scope','$rootScope','$firebaseArray','$log', function($scope,$rootScope,$firebaseArray,$log) {

	var myProjects = new Firebase('https://projectmanagementsystem-de50f.firebaseio.com/project');

	$scope.projects = $firebaseArray(myProjects);


	var myClients = new Firebase('https://projectmanagementsystem-de50f.firebaseio.com/clients');

	$scope.getClients = $firebaseArray(myClients);

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

        //alert($scope.client_name);
       //  alert($scope.client_name.client_name);
		//var record=$scope.projects.$getRecord($scope.client_name.$id);
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
	}

	$scope.editFormSubmit=function(project,id) {
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
}])


// Customs for Clients
.controller('ClController', ['$scope','$rootScope','$firebaseArray','$log', function($scope,$rootScope,$firebaseArray,$log) {

	var myClients = new Firebase('https://projectmanagementsystem-de50f.firebaseio.com/clients');

	$scope.getClients = $firebaseArray(myClients);

	$scope.showForm = function() {
		$scope.addFormShow = true;
		$scope.editFormShow = false;
		clearForm();
	}
	$scope.hideForm = function(){
		$scope.addFormShow = false;
	}

	function clearForm() {
		$scope.client_name = '';
		$scope.client_email = '';
		$scope.client_phone = '';
		$scope.client_country = '';
		$scope.client_city = '';
		$scope.client_st_add = '';
		$scope.client_source = '';
	}

	$scope.addFormSubmit=function() {
		$scope.getClients.$add({
			client_name:$scope.client_name,
			client_email:$scope.client_email,
			client_phone:$scope.client_phone,
			client_country:$scope.client_country,
			client_city:$scope.client_city,
			client_st_add:$scope.client_st_add,
			client_source:$scope.client_source,
			});
		clearForm();
	}

	$scope.editData = function(client,id) {
		$scope.addFormShow = false;
		$scope.editFormShow = true;

		$scope.client_name = client.client_name;
		$scope.client_email = client.client_email;
		$scope.client_phone = client.client_phone;
		$scope.client_country = client.client_country;
		$scope.client_city = client.client_city;
		$scope.client_st_add = client.client_st_add;
		$scope.client_source = client.client_source;

		$scope.id=client.$id;  
	}

	$scope.showData = function(client,id) {
		$scope.detailsShow = true;

		$scope.client_name = client.client_name;
		$scope.client_email = client.client_email;
		$scope.client_phone = client.client_phone;
		$scope.client_country = client.client_country;
		$scope.client_city = client.client_city;
		$scope.client_st_add = client.client_st_add;
		$scope.client_source = client.client_source;
	}

	$scope.editFormSubmit=function(client,id) {
		var id=$scope.id;
		var record=$scope.getClients.$getRecord(id);

		record.client_name=$scope.client_name;
		record.client_email=$scope.client_email;
		record.client_phone=$scope.client_phone;
		record.client_country=$scope.client_country;
		record.client_city=$scope.client_city;
		record.client_st_add=$scope.client_st_add;
		record.client_source=$scope.client_source;

		$scope.getClients.$save(record);
	}

	$scope.deleteData=function(parent) {
		if (confirm('Are you sure you want to delete this?')) {
			$scope.getClients.$remove(parent);
		}
	}
}]);