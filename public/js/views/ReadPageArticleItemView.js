define([
        'backbone',
        'common',
        'marionette'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.ReadPageArticleItemView = Backbone.Marionette.ItemView.extend({

            template: "#read_article_item_view_template",

            className : "panel panel-default"

        });
    }
);