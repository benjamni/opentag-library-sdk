//:include tagsdk-current.js

qubit.opentag.LibraryTag.define(
	"google.googledynamicremarketingtagconfirmationpagedeprecated.v1.Tag", {
		config: {
			/*DATA*/
			name: "Google Dynamic Remarketing Tag - Confirmation Page [DEPRECATED]",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: true,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [{
				name: "Product IDs",
				description: "Product IDs",
				token: "product_ids",
				uv: "universal_variable.transaction.line_items[#].product.sku_code"
			}, {
				name: "Product Categories",
				description: "Product Categories",
				token: "product_categories",
				uv: "universal_variable.transaction.line_items[#].product.category"
			}, {
				name: "Page Category",
				description: "Page Category",
				token: "page_category",
				uv: "universal_variable.page.category"
			}, {
				name: "Product Values",
				description: "Product Values",
				token: "product_values",
				uv: "universal_variable.transaction.line_items[#].product.unit_price"
			}, {
				name: "Google Conversion ID",
				description: "Google Conversion ID",
				token: "google_conversion_id",
				uv: ""
			}, {
				name: "Google Conversion Label",
				description: "Google Conversion Label",
				token: "google_conversion_label",
				uv: ""
			}]
			/*~DATA*/
		},
		script: function() {
			/*SCRIPT*/
			var productIdsArray = [];
			for (var i = 0; i < this.valueForToken("product_ids").length; i++) {
				productIdsArray.push(this.valueForToken("product_ids")[i]);
			}
			var productCategoriesArray = [];
			for (var i = 0; i < this.valueForToken("product_categories").length; i++) {
				productCategoriesArray.push(this.valueForToken("product_categories")[i]);
			}
			var productValuesArray = [];
			for (var i = 0; i < this.valueForToken("product_values").length; i++) {
				productValuesArray.push(this.valueForToken("product_values")[i]);
			}
			
			window.google_tag_params = {
				ecomm_prodid: productIdsArray,
				ecomm_pagetype: '' + this.valueForToken("page_category"),
				ecomm_pcat: productCategoriesArray,
				ecomm_pvalue: productValuesArray
			};

			window.google_conversion_id = this.valueForToken("google_conversion_id");
			window.google_conversion_label = "" + this.valueForToken("google_conversion_label");
			window.google_custom_params = window.google_tag_params;
			window.google_remarketing_only = true;

			var script = document.createElement('script');
			script.type = "text/javascript";
			script.src = "//www.googleadservices.com/pagead/conversion.js";
			document.head.appendChild(script);
			/*~SCRIPT*/
		},
		pre: function() {
			/*PRE*/
			/*~PRE*/
		},
		post: function() {
			/*POST*/
			/*~POST*/
		}
	});