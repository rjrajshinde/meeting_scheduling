//App Created Using angular module
const app = angular.module('manageMeeting', ['ngSanitize', 'ngMessages', 'ui.bootstrap', 'ui.bootstrap.modal']);

//Controller Created For Angular App
app.controller('manageMeetingController', ['$scope', '$http', '$uibModal', ($scope, $http, $uibModal) => {
    //Data Used For Controller
    $scope.meetings = [];

    //Method To Init Controller
    $scope.init = function () {
        $scope.display();
    }

    //Method To Display All meetings
    $scope.display = () => {
        $http.get('/manageMeetings/display').then((res) => {
            $scope.meetings = res.data.data;
        }).catch((err) => {
            console.log(err);
        })
    };

    //Method To Delete User
    $scope.delete = (userId, index) => {
        $http.delete('/manageMeetings/delete/' + userId).then((res) => {
            $scope.meetings.splice(index, 1);
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
            templateUrl: "meetingModal",
            controller: "meetingModalController",
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


app.controller('meetingModalController', ['$scope', '$http', 'record','$window', ($scope, $http, record, $window) => {
    //Controller Data Variables Declared Here
    $scope.newMeetings = {};

    //Method To Init Controller
    function init() {
        $scope.newMeetings = record;
    }
    init();

    //Method To Add User
    $scope.create = () => {
        $http.post('/manageMeetings/create', $scope.newMeetings).then((res) => {
            //Disable Comment If You Want To Refresh Page
            // $window.location.reload();
            $scope.meetings.push(res.data.data);
            $scope.close();
        }).catch((err) => {
            console.log(err);
        })
    };

    //Method to edit user
    $scope.edit = () => {
        $http.put('/manageMeetings/edit/' + $scope.newMeetings._id, $scope.newMeetings).then((res) => {
            $window.location.reload();
            $scope.meetings[$scope.newMeetings.index] = res.data.data;
            $scope.close();
        }).catch((err) => {
            console.log(err);
        })
    }

    $scope.close = () => { $scope.modalInstance.close() };
}]);

