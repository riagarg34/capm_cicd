sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("odatav22ui.controller.View1", {
            onInit: function () {
                console.log("CICD check");
                console.log("CICD check 2");

            },
            onAdd: function () {
                console.log("on Add function for CICD check");
                console.log("on Add function for CICD check 2");
                var oPay = {
                    id: null, name: "", department: ""
                };
                var oItem = new sap.m.ColumnListItem({
                    cells: [new sap.m.Input({
                        value: "{id}"
                    }), new sap.m.Input({
                        value: "{name}"
                    }), new sap.m.Input({
                        value: "{department}"
                    })]
                });

                var oContext = this.getOwnerComponent().getModel().createEntry("/Emp", {
                    properties: oPay
                });
                oItem.setBindingContext(oContext);
                this.getView().byId("idEmpTbl").addItem(oItem, 0);
            },
            onAddHarCoded: function () {
                var that = this;
                let oPay = {
                    id: 10,
                    name: "Harish",
                    department: "HR-BTP"
                };
                this.getOwnerComponent().getModel().create("/Emp", oPay, {
                    success: function () {
                        console.log("Added");
                        that.getOwnerComponent().getModel().refresh();
                    },
                    error: function (err) {
                        console.log(err);
                    }
                })
            },
            onSave: function () {
                this.getOwnerComponent().getModel().submitChanges();
            },
            onUpdate: function () {
                var that = this;
                var oPayUpdate = {
                    id: 10,
                    department: "HR-BTP Updated 2"
                };
                this.getOwnerComponent().getModel().update("/Emp(10)", oPayUpdate, {
                    success: function () {
                        console.log("Updated");
                        that.getOwnerComponent().getModel().refresh();
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            },
            onRefresh: function () {
                this.getOwnerComponent().getModel().refresh();
            }

        });
    });
