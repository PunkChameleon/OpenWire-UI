define([
        'backbone',
        'common',
        'marionette',
        'views/FooterView',
        'views/HeaderView',
        'models/UserModel'
    ],
    function (Backbone, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Layouts.OverallLayout = Backbone.Marionette.Layout.extend({

            template: "#overall_layout_template",

            regions: {
                header : "#header",
                nav: "#navigation",
                content: "#content",
                footer: "#footer"
            },

            onRender : function () {
                
                this.header.show(new OW.Views.HeaderView({
                    model : new OW.Models.UserModel()
                }));

                this.footer.show(new OW.Views.FooterView());
            }

        });
    }
);