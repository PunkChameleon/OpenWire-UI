define([
        'backbone',
        'common',
        'underscore',
        'marionette'
    ],
    function (Backbone, Common, _) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Views.TrendsView = Backbone.Marionette.ItemView.extend({

            template: "#trends_view_template",

            initialize: function () {
                // Bind the view to the Model
                this.listenTo(this.model, 'change', this.render, this);
            },

            onRender : function () {
                var that = this,
                    lat,
                    lon;

                if (navigator.geolocation && _.isEmpty(this.model.get("trends"))) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        lat = position.coords.latitude;
                        lon = position.coords.longitude;

                        that.model.getRecentTrends(lat, lon, function (data) {
                            that.model.set(data);
                        }, function (err) {
                            alert('Error getting trends. Please reload.');
                            console.log(err);
                        });

                    });

                    
                }
            }

        });
    }
);