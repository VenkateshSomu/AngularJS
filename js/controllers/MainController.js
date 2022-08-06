app.controller("MainController", ["$scope", function($scope){
    $scope.todos = {
       title: "Todos!",
       list: ["Learn basics of Angular JS", "Create Sample Apps", "Practice more", "Become pro in AngularJS"]
    }
    $scope.books = {
        title: "Books!",
        list: ["Book1", "Book2","Book3","Book4"]
    }
    $scope.addItem = function(itemList, item){
        itemList.push(item)
    }
}]);