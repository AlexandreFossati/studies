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
            createDialog: undefined,
            
			onInit: function () {
                const model = new ODataModel("/Northwind/V2/(S(jesfawywpz3epp00v2x2cvp0))/OData/OData.svc/") 
                this.getView().setModel(model)
			},

            openCreateDialog: function() {
                var view = this.getView()

                if (!this.createDialog) {
                    this.createDialog = Fragment.load({
                        id: view.getId(),
                        name: "namespace.studies.view.fragments.ODataModel_CreateDialog",
                        controller: this
                    }).then(dialog => {
                        view.addDependent(dialog)
                        return dialog
                    })
                } 

                this.createDialog.then(dialog => dialog.open())
            },

            onCancelCreate: async function() {
                try {
                    const createDialog = await this.createDialog
                    this.byId("productID").setValue()
                    this.byId("productRating").setValue()
                    createDialog.close()
                }
                catch(exception) {
                    console.error(exception)
                }
            },

            onConfirmCreate: async function() {
                try {
                    const createDialog = await this.createDialog
                    const productID = this.byId("productID").getValue()
                    const productRating = this.byId("productRating").getValue()
                    
                    const model = this.getView().getModel()

                    model.createEntry(`/Products(${productID})`, {
                        ID: productID,
                        Rating: productRating
                    })

                    model.submitChanges()

                    createDialog.close()
                }
                catch(exception) {
                    console.error(exception)
                }
            }
		});
	});
