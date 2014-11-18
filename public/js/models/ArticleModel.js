define([
        'jquery',
        'backbone',
        'common'
    ],
    function ($, Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Models.ArticleModel = Backbone.Model.extend({

            defaults : {
                id : null,
                title : null,
                body : null
            },

            submitArticle: function (title, body, successCallback, failureCallback) {

                $.ajax({
                    type: "POST",
                    url: Common.api_url + "/api/submit-article.json",
                    dataType: 'json',
                    data: {
                        "title": title,
                        "body": body
                    },
                    success: function (data) {
                        successCallback(data);
                    },
                    error: function (xhr, status, error) {
                        failureCallback(xhr, status, error);
                    }
                });

            },


            editArticle: function (body, successCallback, failureCallback) {

                var id = this.get("objectId"),
                    that = this;

                $.ajax({
                    type: "POST",
                    url: Common.api_url + "/api/edit-article.json",
                    dataType: 'json',
                    data: {
                        "id" : id,
                        //"title": title,
                        "body": body
                    },
                    success: function (data) {
                        successCallback(data);
                    },
                    error: function (xhr, status, error) {
                        if (xhr.status === 403) {
                            alert("Please log in before editing.");
                        }
                    }
                });
            },

            voteUp: function (successCallback, failureCallback) {
                var id = this.get("objectId"),
                    that = this;

                $.ajax({
                    type: "POST",
                    url: Common.api_url + "/api/vote-up.json",
                    dataType: 'json',
                    data : {
                        "id" : id
                    },
                    success: function (data) {
                        that.set(data);
                    },
                    error: function (xhr, status, error) {
                        if (xhr.status === 403) {
                            alert("Please log in before voting.");
                        }
                    }
                });
            },

            voteDown: function (successCallback, failureCallback) {
                
                var id = this.get("objectId"),
                    that = this;

                $.ajax({
                    type: "POST",
                    url: Common.api_url + "/api/vote-down.json",
                    dataType: 'json',
                    data : {
                        "id" : id
                    },
                    success: function (data) {
                        that.set(data);
                    },
                    error: function (xhr, status, error) {
                        if (xhr.status === 403) {
                            alert("Please log in before voting.");
                        }
                    }
                });
            }

        });
    }
);