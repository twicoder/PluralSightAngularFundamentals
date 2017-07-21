'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData,$log,$anchorScroll,$routeParams,$route){

        $scope.snippet = '<span style="color:red">Hi,there!</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:'red'};
        $scope.myclass = "blue";
        $scope.buttonDisabled = true;

        $scope.sortorder = 'name';

        console.log($route.current.params.foo);
        console.log($route.current.params.eventId);

        // $scope.event = eventData.getEvent($routeParams.eventId);
        $scope.event = $route.current.locals.event;

        $scope.reload = function(){
            $route.reload();
        };

        // eventData.getEvent()
        //     .$promise
        //     .then(function(event){$scope.event = event; console.log(event);})
        //     .catch(function(response){console.log(response)});

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