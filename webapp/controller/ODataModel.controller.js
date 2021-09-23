sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/core/Fragment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, ODataModel, Fragment) {
		"use strict";

		return Controller.extend("namespace.studies.controller.ODataModel", { 
            
            model: new ODataModel("/Northwind/V2/(S(jesfawywpz3epp00v2x2cvp0))/OData/OData.svc/"),
            createDialog: undefined,
            
			onInit: function () {
                this.getView().setModel(this.model)
			},

            openCreateDialog: function() {
                var view = this.getView()

                if (!this.createDialog) {
                    this.createDialog = Fragment.load({
                        id: view.getId(),
                        name: "namespace.studies.view.fragments.ODataModel_CreateDialog"
                    }).then(dialog => {
                        view.addDependent(dialog)
                        return dialog
                    })
                } 

                this.createDialog.then(function(dialog) {
                    dialog.open()
                })
            }
		});
	});
