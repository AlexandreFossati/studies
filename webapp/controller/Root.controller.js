sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("namespace.studies.controller.Root", {
			onSelectItem: function(event) {
				const selectedKey = event.getSource().getSelectedKey()

				this.getOwnerComponent()
					.getRouter()
					.navTo(`Route${selectedKey}`)
			}
		});
	});
