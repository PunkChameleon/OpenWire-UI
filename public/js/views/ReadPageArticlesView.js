define([
        'backbone',
        'common',
        'marionette',
        'views/ReadPageArticleItemView'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.ReadPageArticlesView = Backbone.Marionette.CollectionView.extend({

            itemView: OW.Views.ReadPageArticleItemView,

            initialize : function () {
                // Bind the view to the Model
                this.collection.getRecentArticles();
            }

        });
    }
);