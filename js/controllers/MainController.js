app.controller("MainController", ["$scope", function($scope){
    $scope.list = ["Learn basics of Angular JS", "Create Sample Apps", "Practice more", "Become pro in AngularJS"];
    $scope.addTodo = function(){
        $scope.list.push($scope.todoItem)
    }
}]);