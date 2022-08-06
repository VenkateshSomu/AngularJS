app.controller("MainController", ["$scope", "$http", function($scope, $http){
    $scope.todos = {
       title: "Todos!",
       list: ["Learn basics of Angular JS", "Create Sample Apps", "Practice more", "Become pro in AngularJS"]
    }
    $scope.books = {
        title: "Books!",
        list: ["Book1", "Book2","Book3","Book4"]
    }
    function isISBN(item){
        return /^[0-9]*$/.test(item);
    }
    $scope.addItem = function(itemList, item){
        if((item.length === 10 || item.length ===13) && isISBN(item)){
            console.log("item is ISBN")
            $http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + item).then(function success(data) {
                console.log(data);
            })
        } else {
            console.log("Not an ISBN number");
        }
        itemList.push(item)
    }
}]);