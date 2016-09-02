/////*******************************////
//////**********kosmos-api.js*******//////////
/// <reference path="jquery-1.10.2.js" />
(function (window, jQuery) {
    var baseurl = "http://localhost:46618";
    var pageIndex = 1,
        pageSize = 2;
    var documenturl = {
        create: baseurl + "/api/document/create",
        update: baseurl + "/api/document/update",
        updateAndPublish: baseurl + "/api/document/updateandpublish",
        delete: baseurl + "/api/document/delete",
        getPublishedDocList: "/api/document/getpublisheddoclist"
    };
    var response = { code: 0, msg: "success", result: [] };
    var cachelist = {
        lastpage: false,
        doclist: {
            hash: {},
            data: []
        },
        pushData: function (data) {
            for (var i = 0; i < data.length; i++) {
                if (!this.doclist.hash[data[i].DocumentId]) {
                    this.doclist.hash[data[i].DocumentId] = true;
                    this.doclist.data.push(data[i]);
                }
            }
        },
        popData: function () {
            var result = [];
            for (var i = 0; i < pageSize; i++) {
                var doc = this.doclist.data.shift();
                if (!doc) break;;
                result.push(doc);
            }
            return result;
        },
        //push data to cachelist,until cahchelist-size >= pagesize
        requestData: function (paramObj) {
            var that = this;
            while (that.doclist.data.length < pageSize && !that.lastpage) {
                paramObj.pageIndex = pageIndex;
                jQuery.post(documenturl.getPublishedDocList, paramObj, function (res) {
                    response = res;
                    if (res.result.length < 50) that.lastpage = true;
                    that.pushData(res.result);
                    pageIndex++;
                });
            }
        },
        getData: function (paramObj) {
            this.requestData(paramObj);
            response.result = this.popData();
        }
    }

    var document = {
        create: function (obj, success) {
            jQuery.post(documenturl.create, obj, success);
        },
        update: function (obj, success) {
            jQuery.post(documenturl.update, obj, success);
        },
        updateAndPublish: function (obj, success) {
            jQuery.post(documenturl.updateAndPublish, obj, success);
        },
        delete: function (obj, success) {
            jQuery.post(documenturl.delete, obj, success);
        },
        getPublishedDocList: function (obj, success) {
            cachelist.getData(obj);
            success(response);
        }
    }

    window.kosmosapi = {
        document: document
    }
})(window, jQuery);