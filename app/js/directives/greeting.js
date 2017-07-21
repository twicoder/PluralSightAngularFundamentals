'use strict';

eventsApp
    .directive('greeting', function () {
        return {
            restrict: 'E',
            replace: true,
            priority:1,

            template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
            controller: function ($scope) {
                var greetings = ['hello'];
                $scope.sayHello = function () {
                    console.log(greetings.join());
                }
                this.addGreeting = function(greeting){
                    greetings.push(greeting);
                }
            }
        }
    })
    .directive('finnish', function () {
        return {
            restrict: 'A',
            priority:1,
            require:'greeting',
            link:function(scope,element,attrs,controller){
                controller.addGreeting('hei_1');
            }
        }
    })
    .directive('hindi', function () {
        return {
            restrict: 'A',
            priority:2,
            require:'greeting',
            link:function(scope,element,attrs,controller){
                controller.addGreeting('hindi_2测试！');
            }
        }
    });