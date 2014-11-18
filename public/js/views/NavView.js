define([
        'backbone',
        'common',
        'marionette'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.NavView = Backbone.Marionette.ItemView.extend({

            template: "#nav_view_template",

            className: "container",

            onRender : function () {
                var activeOption = this.options.active,
                    targetLink = this.$el.find('.' + activeOption);

                targetLink.addClass('active');
            }

        });
    }
);