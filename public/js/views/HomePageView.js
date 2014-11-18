define([
        'backbone',
        'common',
        'marionette'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.HomePageView = Backbone.Marionette.ItemView.extend({

            template: "#home_page_view_template"

        });
    }
);