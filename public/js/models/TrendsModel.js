define([
        'backbone',
        'common',
        'jquery'
    ],
    function (Backbone, Common, $) {

        'use strict';

        var OW = Common.app_namespace || {};

        OW.Models.TrendsModel = Backbone.Model.extend({

            getRecentTrends: function (lat, lon, successCallback, failureCallback) {

                $.ajax({
                    type: "POST",
                    url: Common.api_url + "/api/get-trends.json",
                    dataType: 'json',
                    data : {
                        lat: lat,
                        lon: lon
                    },
                    success: function (data) {
                        successCallback(data);
                    },
                    error: function (xhr, status, error) {
                        failureCallback(xhr, status, error);
                    }
                });
            }

        });
    }
);