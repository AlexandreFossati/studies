sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("namespace.studies.controller.MessagePopover", {
			onOpenPopover: function(event) {
                const button = event.getSource()
                this.byId("popover").toggle(button)                
            }
		});
	});
