define([
        'marionette',
        'common',
        'backbone',
        'layouts/OverallLayout',
        'views/NavView',
        'views/HomePageView',
        'layouts/CreatePageLayout',
        'views/ImprovePageView',
        'layouts/ReadPageLayout',
        'collections/ArticlesCollection',
        'views/SignUpView',
        'models/UserModel'
    ],
    function (Marionette, Common) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Controllers.GlobalController = Marionette.Controller.extend({

            index: function () {

                var overallLayout = new OW.Layouts.OverallLayout();

                OW.Application.wrapper.show(overallLayout);

                overallLayout.nav.show(new OW.Views.NavView({
                    active: 'index'
                }));
                overallLayout.content.show(new OW.Views.HomePageView());

            },

            create : function () {
                var overallLayout = new OW.Layouts.OverallLayout();

                OW.Application.wrapper.show(overallLayout);

                overallLayout.nav.show(new OW.Views.NavView({
                    active: 'create'
                }));
                overallLayout.content.show(new OW.Layouts.CreatePageLayout());
            },

            improve : function () {
                var overallLayout = new OW.Layouts.OverallLayout();

                OW.Application.wrapper.show(overallLayout);

                overallLayout.nav.show(new OW.Views.NavView({
                    active : 'improve'
                }));
                overallLayout.content.show(new OW.Views.ImprovePageView({
                    collection : new OW.Collections.ArticlesCollection()
                }));
            },

            read : function () {
                var overallLayout = new OW.Layouts.OverallLayout();

                OW.Application.wrapper.show(overallLayout);

                overallLayout.nav.show(new OW.Views.NavView({
                    active : 'read'
                }));
                overallLayout.content.show(new OW.Layouts.ReadPageLayout({
                    collection : new OW.Collections.ArticlesCollection()
                }));
            },

            signUp : function () {
                var overallLayout = new OW.Layouts.OverallLayout();

                OW.Application.wrapper.show(overallLayout);

                overallLayout.nav.show(new OW.Views.NavView());
                overallLayout.content.show(new OW.Views.SignUpView({
                    model : new OW.Models.UserModel()
                }));
            }

        });
    }
);