define([
        'backbone',
        'common',
        'marionette'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.LogInView = Backbone.Marionette.ItemView.extend({

            template: "#log_in_view_template"

        });
    }
);