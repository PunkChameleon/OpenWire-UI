require.config({

    baseUrl: "js",

    paths: {
        'jquery': 'vendor/jquery-1.11.1.min',
        'underscore': 'vendor/underscore.min',
        'backbone': 'vendor/backbone.min',
        'marionette': 'vendor/backbone.marionette',
        'mustache': 'vendor/mustache.min',
        'bootstrap': 'vendor/bootstrap.min',
        'bootbox' : 'vendor/bootbox.min',
        'common': 'common'
    },

    shim: {
        'underscore': {
            exports: '_'
        },

        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },

        'marionette': {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },

        'mustache': {
            exports: 'mustache'
        },

        'bootstrap': {
            deps: ['jquery']
        },

        'bootbox' : {
            deps: ['bootstrap', 'jquery']
        }
    }
});

require([
        'backbone',
        'marionette',
        'common',
        'jquery',
        'mustache',
        'controllers/GlobalController',
        'routers/GlobalRouter'
    ],
    function (Backbone, Marionette, Common, $, Mustache) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Application = new Marionette.Application();

        OW.Application.addRegions({
            wrapper: '#wrapper'
        });

        function createRouter(controller) {

            var globalRouter = new OW.Routers.GlobalRouter({
                controller: controller
            });

            return globalRouter;
        }

        OW.Application.addInitializer(function () {

            Backbone.Marionette.TemplateCache.prototype.compileTemplate = function (rawTemplate) {
                return Mustache.compile(rawTemplate);
            };

            createRouter(new OW.Controllers.GlobalController());

        });

        OW.Application.on("initialize:after", function () {

            Backbone.history.start();

        });

        OW.Application.start();

    }
);
