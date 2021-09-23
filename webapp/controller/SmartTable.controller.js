sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, ODataModel, JSONModel, MessageToast, MessageBox) {
		"use strict";

		return Controller.extend("namespace.studies.controller.SmartTable", {
			onInit: function () {
                const model = new ODataModel("/Northwind/V2/Northwind/Northwind.svc/")

                this.getView().setModel(model)

				this.getView().byId("smartTable").getTable().setSelectionMode("None")

				MessageToast.show(`Falta implementar:\n
					- VER COMO ADICIONAR UMA CUSTOM COLUMN NOS FILTROS DA SMART TABLE
					- VER COMO FAZER SMART TABLE COM JSON MODEL (o link com a referência está no controller)
					- CRIAR MESSAGE POPOVER`)

				/* https://blogs.sap.com/2019/06/26/enable-crud-operations-in-smart-table-sapui5 */
			},

			onDisplayPress: function(event) {
				MessageToast.show("display")
			},

			onEditPress: function(event) {
				MessageToast.show("edit")
			}
		});
	});
