define([
        'backbone',
        'common',
        'marionette'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.ImproveItemView = Backbone.Marionette.ItemView.extend({

            template: "#improve_item_view_template",

            className : "container",

            initialize: function () {
                // Bind the view to the Model
                this.listenTo(this.model, 'change', this.render, this);
            },

            events : {
                "click .vote-up" : "voteUp",
                "click .vote-down" : "voteDown",
                "click .edit-article" : "switchToEdit",
                "click .save-edit" : "saveEdit"
            },

            voteUp : function () {
                this.model.voteUp();
            },

            voteDown : function () {
                this.model.voteDown();
            },

            switchToEdit : function () {
                this.template = '#improve_item_edit_view_template';
                this.render();
            },

            saveEdit : function () {
                var body = this.$el.find("#edit-article").val(),
                    that = this;

                this.model.editArticle(body, function (data) {
                    that.template = "#improve_item_view_template";
                    that.model.set(data);
                });
            }

        });
    }
);