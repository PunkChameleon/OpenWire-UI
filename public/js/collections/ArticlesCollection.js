define([
        'backbone',
        'common',
        'jquery',
        'models/ArticleModel'
    ],
    function (Backbone, Common, $) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Collections.ArticlesCollection = Backbone.Collection.extend({

            model: OW.Models.ArticleModel,

            getFluxArticles: function (failureCallback) {
                var that = this;

                $.ajax({
                    type: "GET",
                    url: "/api/flux-articles.json",
                    dataType: 'json',
                    success: function (data) {
                        that.set(data);
                    },
                    error: function (xhr, status, error) {
                        failureCallback(xhr, status, error);
                    }
                });
            },

            getRecentArticles: function (failureCallback) {
                var that = this;

                $.ajax({
                    type: "GET",
                    url: "/api/recent-articles.json",
                    dataType: 'json',
                    success: function (data) {
                        that.set(data);
                    },
                    error: function (xhr, status, error) {
                        failureCallback(xhr, status, error);
                    }
                });
            }

        });
    }
);