define([
        'backbone',
        'common',
        'marionette'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.FooterView = Backbone.Marionette.ItemView.extend({

            template: "#footer_view_template"

        });
    }
);