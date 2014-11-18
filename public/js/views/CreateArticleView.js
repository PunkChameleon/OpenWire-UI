define([
        'backbone',
        'common',
        'marionette'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.CreateArticleView = Backbone.Marionette.ItemView.extend({

            template: "#create_article_view_template",

            events : {
                "click #submit-article" : "submitArticle"
            },

            submitArticle : function () {
                var title = this.$el.find('#title').val(),
                    body = this.$el.find('#editor').val();

                this.model.submitArticle(title, body, function (data) {
                    alert('Article successfully submitted.');
                    window.location.hash = "improve";
                }, function (err) {
                    alert('Error submitting article. Please try again.');
                });
            }

        });
    }
);