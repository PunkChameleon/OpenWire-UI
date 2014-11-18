define([
        'jquery',
        'backbone',
        'common'
    ],
    function ($, Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Models.UserModel = Backbone.Model.extend({

            //Set up default values 
            defaults: {
                "username" : null,
                "displayName" : null
            },

            initialize : function () {
                var that = this;

                if (!this.get("username")) {
                    this.getCurrentUser(function (user) {
                        that.set(user);
                    });
                }
                
            },

            setData: function (username, displayName) {

                this.set({
                    "username": username,
                    "displayName" : displayName
                });

            },

            login: function (username, password, successCallback, failureCallback) {

                $.ajax({
                    type: "POST",
                    url: "/api/login.json",
                    dataType: 'json',
                    data: {
                        "username": username,
                        "password": password
                    },
                    success: function (data) {
                        successCallback(data);
                    },
                    error: function (xhr, status, error) {
                        if (failureCallback) {
                            failureCallback(xhr, status, error);
                        }
                    }
                });

            },


            logout: function (successCallback, failureCallback) {

                $.ajax({
                    type: "POST",
                    url: "/api/logout.json",
                    dataType: 'json',
                    success: function (data) {
                        successCallback(data);
                    },
                    error: function (xhr, status, error) {
                        if (failureCallback) {
                            failureCallback(xhr, status, error);
                        }
                    }
                });
            },

            signUp: function (username, password, email, displayName, successCallback, failureCallback) {

                $.ajax({
                    type: "POST",
                    url: "/api/sign-up.json",
                    dataType: 'json',
                    data: {
                        "username": username,
                        "password": password,
                        "email" : email,
                        "displayName" : displayName
                    },
                    success: function (data) {
                        successCallback(data);
                    },
                    error: function (xhr, status, error) {
                        if (failureCallback) {
                            failureCallback(xhr, status, error);
                        }
                    }
                });
            },

            getCurrentUser: function (successCallback, failureCallback) {

                $.ajax({
                    type: "GET",
                    url: "/api/current-user.json",
                    dataType: 'json',
                    success: function (data) {
                        successCallback(data);
                    },
                    error: function (xhr, status, error) {
                        if (failureCallback) {
                            failureCallback(xhr, status, error);
                        }
                    }
                });
            }
        });
    }
);