sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("namespace.studies.controller.Root", {
			onInit: function() {
				const component = this.getOwnerComponent()
				const router = component.getRouter()
				const routes = Object.keys(router._oRoutes)
				
				const navigationList = routes.map(route => {
					return { 
						name: route.replaceAll("_", " "),
						route: route
					}
				})

				this.getView()
					.setModel(new JSONModel(navigationList), "navigationList")
			},
			onSelectItem: function(event) {
				const selectedKey = event.getSource().getSelectedKey()

				this.getOwnerComponent()
					.getRouter()
					.navTo(selectedKey)
			}
		});
	});
