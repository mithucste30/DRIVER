(function () {
    'use strict';

    /* ngInject */
    function StateConfig($stateProvider) {
        $stateProvider.state('dashboard', {
            url: '/',
            template: '<driver-dashboard></driver-dashboard>',
            label: 'Dashboard',
            showInNavbar: true
        });
    }

    angular.module('driver.views.dashboard', [
        'ui.router',
        'ui.bootstrap',
        'ase.resources',
        'driver.resources',
        'driver.toddow',
        'driver.stepwise',
        'driver.state',
        'driver.map-layers.recent-events'
    ]).config(StateConfig);

})();
