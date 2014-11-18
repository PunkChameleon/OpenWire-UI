define([
        'backbone',
        'common',
        'marionette',
        'views/ImproveItemView'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.ImprovePageView = Backbone.Marionette.CollectionView.extend({

            itemView: OW.Views.ImproveItemView,

            initialize : function () {
                // Bind the view to the Model
                this.collection.getFluxArticles();
            }

        });
    }
);