define([
        'backbone',
        'common',
        'marionette'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.SignUpView = Backbone.Marionette.ItemView.extend({

            template: "#sign_up_view_template"

        });
    }
);