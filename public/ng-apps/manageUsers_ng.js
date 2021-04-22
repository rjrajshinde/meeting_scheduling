//App Created Using angular module
const app = angular.module('manageUsers', ['ngSanitize', 'ngMessages', 'ui.bootstrap', 'ui.bootstrap.modal']);

//Controller Created For Angular App
app.controller('manageUsersController', ['$scope', '$http', '$uibModal', ($scope, $http, $uibModal) => {
    //Data Used For Controller
    $scope.users = [];

    //Method To Init Controller
    $scope.init = function () {
        $scope.display();
    }

    //Method To Display All Users
    $scope.display = () => {
        $http.get('/manageUsers/display').then((res) => {
            $scope.users = res.data.data;
        }).catch((err) => {
            console.log(err);
        })
    };

    //Method To Delete User
    $scope.delete = (userId, index) => {
        $http.delete('/manageUsers/delete/' + userId).then((res) => {
            $scope.users.splice(index, 1);
        }).catch((err) => {
            console.log(err);
        })
    }

    //Method To Open Create or Edit User Modal
    $scope.openModal = (mode, data, index) => {
        let modalData = {};

        if (mode == 'edit') {
            modalData = data;
            modalData.index = index;
        }
        modalData.mode = mode
        $scope.modalInstance = $uibModal.open({
            animation: true,
            templateUrl: "userModal",
            controller: "userModalController",
            scope: $scope,
            backdrop: false,
            size: "lg",
            windowClass: "show",
            resolve: {
                record: function () {
                    return modalData;
                },
            },
        })
    }
}]);


app.controller('userModalController', ['$scope', '$http', 'record','$window', ($scope, $http, record, $window) => {
    //Controller Data Variables Declared Here
    $scope.newUser = {};

    //Method To Init Controller
    function init() {
        $scope.newUser = record;
    }
    init();

    //Method To Add User
    $scope.create = () => {
        $http.post('/manageUsers/create', $scope.newUser).then((res) => {
            //Disable Comment If You Want To Refresh Page
            // $window.location.reload();
            $scope.users.push(res.data.data);
            $scope.close();
        }).catch((err) => {
            console.log(err);
        })
    };

    //Method to edit user
    $scope.edit = () => {
        $http.put('/manageUsers/edit/' + $scope.newUser._id, $scope.newUser).then((res) => {
            $window.location.reload();
            $scope.users[$scope.newUser.index] = res.data.data;
            $scope.close();
        }).catch((err) => {
            console.log(err);
        })
    }

    $scope.close = () => { $scope.modalInstance.close() };
}]);

