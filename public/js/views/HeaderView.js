define([
        'backbone',
        'common',
        'bootbox',
        'jquery',
        'views/SignUpView',
        'views/LogInView',
        'marionette',
        'bootstrap'
    ],
    function (Backbone, Common, Bootbox, $) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.HeaderView = Backbone.Marionette.ItemView.extend({

            template: "#header_view_template",

            className: "container",

            initialize: function () {
                // Bind the view to the Model
                this.listenTo(this.model, 'change', this.render, this);
            },

            events : {
                "click #log-in" : "login",
                "click #log-out" : "logout",
                "click #sign-up" : "signUp"
            },

            login : function () {

                var logInView = new OW.Views.LogInView(),
                    that = this;

                Bootbox.dialog({
                    message : logInView.render().$el,
                    buttons : {
                        main: {
                            label: "Log In",
                            className: "btn-primary",
                            callback : function() {
                                var username = $("#username").val(),
                                    password = $("#password").val();

                                that.model.login(username, password, function (data) {
                                    that.model.set(data);
                                }, function (err) {
                                    alert('There has been a error logging in. Please try again.');
                                });
                            }
                        }
                    }
                });
            },

            logout : function () {
                this.model.logout();
                this.model.clear();
            },

            signUp : function (signUpView) {

                var signUpView = new OW.Views.SignUpView(),
                    that = this;

                Bootbox.dialog({
                    message : signUpView.render().$el,
                    buttons : {
                        main: {
                            label: "Sign Up",
                            className: "btn-primary",
                            callback : function() {
                                var username = $('#username-sign-up').val(),
                                    password = $('#password-sign-up').val(),
                                    email = $('#email-sign-up').val(),
                                    displayName = $('#displayName-sign-up').val();

                                if (!username || !password || !email || !displayName) {
                                    alert('Please fill out all fields.');
                                    return false;
                                }

                                that.model.signUp(username, password, email, displayName, function (data) {
                                    that.model.set(data);
                                }, function (err) {
                                    alert('There has been an error. Please try again.');
                                    console.log(err);
                                });
                            }
                        }
                    }
                });

                
            }

        });
    }
);