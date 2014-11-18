define([
        'backbone',
        'common',
        'marionette'
    ],
    function (Backbone, Common) {

        'use strict';

        var GOB = Common.app_namespace || {};

        GOB.Routers.GlobalRouter = Backbone.Marionette.AppRouter.extend({

            appRoutes: {
                "": "index",
                "create" : "create",
                "improve" : "improve",
                "read" : "read",
                "signUp" : "signUp"
            }

        });
    }
);