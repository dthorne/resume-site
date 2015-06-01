angular.module('famousAngularStarter').controller('MainCtrl', 
['$scope', '$famous', 'ColorService', 
function($scope, $famous, ColorService) {
    var baseList = new Array(1000);
    $scope.list = _.map(baseList, function(empty, index) {
        return {
            id: index,
            name: 'name' + index
        };
    });

}]);