const app = angular.module("loginUserApp", ['ngSanitize', 'ngMessages']);

app.controller('loginUserAppCtrlr', ['$scope', '$http', '$window', ($scope, $http, $window) => {
    $scope.loginUser = () => {
        $http.post('/auth/login', $scope.user).then((res) => {
            alert("Admin Logged In Successfully");
            $window.location = '/';
        }).catch((err) => {
            alert("Something Went Wrong");
        });
    };
}]);
