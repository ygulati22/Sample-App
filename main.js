var caamo = angular.module("main", [ 'angularUtils.directives.dirPagination' ])

caamo
		.controller(
				'mainController',
				[
						'$scope',
						'$http',
						function($scope, $http) {
							$scope.list1 = [];
							$scope.updatedPlayer = {};
							$scope.newPlayer = {}
							$scope.tempId = null;
							$scope.message = null;
							$scope.flag = false;
							$scope.flag1 = false;

							$scope.getPlayers = function() {
								/*
								 * var promise = $http.get("data.json");
								 * promise.success(function(data, status,
								 * headers, config) { $scope.list1 = data; })
								 * promise.error(function(data, status, headers,
								 * config) { console.log(data); })
								 */
								$scope.list1 = [ {
									"id" : 1,
									"name" : "Ronaldo",
									"position" : "Forward",
									"goal" : 28
								}, {
									"id" : 2,
									"name" : "Messi",
									"position" : "Forward",
									"goal" : 30
								}, {
									"id" : 3,
									"name" : "Ramos",
									"position" : "Defender",
									"goal" : 7
								}, {
									"id" : 4,
									"name" : "Rooney",
									"position" : "Middle",
									"goal" : 15
								}, {
									"id" : 5,
									"name" : "Nani",
									"position" : "Forward",
									"goal" : 32
								}, {
									"id" : 6,
									"name" : "Kaka",
									"position" : "Defender",
									"goal" : 5
								}, {
									"id" : 7,
									"name" : "Bale",
									"position" : "Forward",
									"goal" : 22
								}, {
									"id" : 8,
									"name" : "Kroos",
									"position" : "Middle",
									"goal" : 11
								}, {
									"id" : 9,
									"name" : "Sodrigues",
									"position" : "Defender",
									"goal" : 5
								}, {
									"id" : 10,
									"name" : "Ronaldino",
									"position" : "Forward",
									"goal" : 32
								}, {
									"id" : 11,
									"name" : "Mukul",
									"position" : "Forward",
									"goal" : 20
								} ]
							}

							$scope.addUser = function() {
								$scope.addPlayer = {};
								var temp = Math.max.apply(Math, $scope.list1
										.map(function(o) {
											return o.id;
										}))
								$scope.addPlayer.id = temp + 1;
								$scope.addPlayer.name = $scope.newPlayer.name;
								$scope.addPlayer.position = $scope.newPlayer.position;
								$scope.addPlayer.goal = $scope.newPlayer.goal;
								if ($scope.newPlayer.name == null
										|| $scope.newPlayer.position == null
										|| $scope.newPlayer.goal == null) {
									$scope.message = "Click Refresh and Enter the Details";
									$scope.flag = true;
								} else {
									$scope.list1.push($scope.addPlayer);
									$scope.flag = false;
									alert("Player " + $scope.newPlayer.name
											+ " with ID " + $scope.addPlayer.id
											+ " has been added");
								}
								$scope.newPlayer = {};
							}

							$scope.refresh = function() {
								$scope.newPlayer = {};
								$scope.flag = false;
								$scope.flag1 = false;
							}

							$scope.deletePlayer = function(id) {
								for (var i = 0; i < $scope.list1.length; i++) {
									if (id == $scope.list1[i].id) {
										$scope.list1.splice(i, 1);
									}
								}
							}

							$scope.updatePlayer = function() {
								for (var i = 0; i < $scope.list1.length; i++) {
									if ($scope.tempId == $scope.list1[i].id) {
										$scope.updatedPlayer.id = $scope.tempId
										$scope.list1[i].id = $scope.updatedPlayer.id;
										$scope.list1[i].name = $scope.updatedPlayer.name;
										$scope.list1[i].position = $scope.updatedPlayer.position;
										$scope.list1[i].goal = $scope.updatedPlayer.goal;
									} else {
										continue;
									}
								}
								alert("Player " + $scope.updatedPlayer.name
										+ " with ID " + $scope.updatedPlayer.id
										+ " has been updated");
								$scope.updatedPlayer = null;
							}

							$scope.save = function(id1) {
								$scope.tempId = id1;
							}
						} ])