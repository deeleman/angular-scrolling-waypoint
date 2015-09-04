(function(ng) {
    'use strict';

    ng.module('scrollingWaypoint', []).directive('whenScrolledToThis', [
        '$window',
        function($window) {
            return {
                scope: {
                    scrollingCompleteHandler: '&',
                    isEnabled: '&',
                    initializeOnClick: '='
                },
                restrict: 'AE',
                replace: 'false',
                transclude: true,
                link: function(scope, elem, attrs) {
                    var onTriggerCSSClass = attrs.onTriggerClass || 'infinite-scroll-triggered';
                    var waitForClick = false;

                    scope.$watch('initializeOnClick', function(initializeOnClick) {
                        waitForClick = initializeOnClick;
                    });

                    var spawnScrollCompleteListeners = function(event) {
                        if (scope.scrollingCompleteHandler) {
                            scope.scrollingCompleteHandler(event);
                        }
                        if (attrs.scrollingCompleteEvent) {
                            scope.$emit(attrs.scrollingCompleteEvent, event);
                        }
                        elem.addClass(onTriggerCSSClass);
                    };

                    elem.bind('click', function(event) {
                        waitForClick = false;
                        spawnScrollCompleteListeners(event);
                    });

                    ng.element($window).bind('scroll', function(event) {
                        if (scope.isEnabled()) {
                            var elWaypoint = elem[0].offsetTop + elem[0].offsetHeight - $window.innerHeight;
                            if ($window.pageYOffset >= elWaypoint) {
                                if (!waitForClick) {
                                    spawnScrollCompleteListeners(event);
                                }
                            } else {
                                elem.removeClass(onTriggerCSSClass);
                            }
                        }
                    });
                }
            };
        }
    ]);

}(angular));
