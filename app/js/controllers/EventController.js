'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData,$log,$anchorScroll){

        $scope.snippet = '<span style="color:red">Hi,there!</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;

        $scope.sortorder = 'name';

        $scope.event = eventData.getEvent();

        eventData.getEvent()
            .$promise
            .then(function(event){$scope.event = event; console.log(event);})
            .catch(function(response){console.log(response)});

        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        };

        $scope.scrolltoSession = function(){
            $anchorScroll();
        };

    }
);