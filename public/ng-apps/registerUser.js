const app = angular.module("registerUserApp", ['ngSanitize', 'ngMessages']);

app.controller('registerUserAppCtrlr', ['$scope', '$http', '$window', ($scope, $http, $window) => {
    //Method To Register User
    $scope.registerUser = () => {
        $http.post('/auth/register', $scope.user).then((res) => {
            alert("User Registered Successfully");
            $window.location = '/auth/login';
        }).catch((err) => {
            alert("Something Went Wrong");
        })
    }
}]);