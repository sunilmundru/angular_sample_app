let myapp =angular.module("Myapp",[]);
let mycontroller = function($scope){
    $scope.message ="Hello World";

}

myapp.controller("MyController",mycontroller);

let JSONController = function($scope){
    let Student= {
        FirstName : "Sunil",
        LastName : "Mundru",
        Email : "s534939@nwmissouri.edu"
    }
    $scope.Studentt= Student;
}

myapp.controller("Student", JSONController);
