define([
        'backbone',
        'common',
        'marionette',
        'models/ArticleModel',
        'views/CreateArticleView',
        'views/TrendsView',
        'models/TrendsModel'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Layouts.CreatePageLayout = Backbone.Marionette.Layout.extend({

            template: "#create_page_view_template",

            className : "container edit-story",

            regions : {
                "form" : "#create-form",
                "trends" : "#trends"
            },

            onRender : function () {
                var model = new OW.Models.ArticleModel();

                this.form.show(new OW.Views.CreateArticleView({
                    model : model
                }));

                this.trends.show(new OW.Views.TrendsView({
                    model : new OW.Models.TrendsModel()
                }));
            }

        });
    }
);