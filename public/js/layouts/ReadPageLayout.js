define([
        'backbone',
        'common',
        'marionette',
        'views/ReadPageArticlesView'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Layouts.ReadPageLayout = Backbone.Marionette.Layout.extend({

            template: "#read_page_layout_template",

            className: "container",

            regions : {
                recentArticles : "#recent-articles"
            },

            onRender : function () {
                var that = this;

                this.recentArticles.show(new OW.Views.ReadPageArticlesView({
                    collection : that.options.collection
                }));
            }

        });
    }
);