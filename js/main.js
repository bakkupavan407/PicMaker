require.config({
    baseUrl: 'js/',
    paths: {
        'jquery': 'lib/jquery-2.1.4.min',
        'jquery-ui': 'lib/jquery-ui-1.12.0.min',
        'angular': 'lib/angular-1.5.6.min',
        'angularRoute': 'lib/angular-route-1.5.6.min',
        'angularUIRouter' : 'lib/angular-ui-router-0.3.1.min',
        'require': 'lib/require-2.2.0.min'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angularUIRouter: {
            deps: ['angular'],
            exports: 'angularUIRouter'
        }
    }
});

require(['app'], function(app) {
    app.start();
});
