//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("google.googleadwordswithlessadditionalparametersdeprecated.Tag", {
	config: {
		/*DATA*/
		name: "Google AdWords with less additional parameters DEPRECATED",
		async: true,
		description: "Tracks users that have converted who previously clicked through on an ad.",
		html: "\n",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/Google.jpeg",
		locationDetail: "",
		priv: true,
		url: "www.googleadservices.com/pagead/conversion_async.js",
		usesDocWrite: false,
		parameters: [
		{
			name: "Conversion ID",
			description: "",
			token: "conversion_id",
			uv: ""
		},
		{
			name: "Conversion Label",
			description: "",
			token: "conversion_label",
			uv: ""
		},
		{
			name: "Conversion Value",
			description: "",
			token: "conversion_value",
			uv: "universal_variable.transaction.subtotal"
		},
		{
			name: "Conversion Format",
			description: "",
			token: "conversion_format",
			uv: ""
		},
		{
			name: "Conversion Color",
			description: "",
			token: "conversion_color",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/
		/*~SCRIPT*/
	},
	pre: function() {
		/*PRE*/
		/*~PRE*/
	},
	post: function() {
		/*POST*/
	window.google_trackConversion({
	  google_conversion_id: this.getValueForToken("conversion_id"),
	  google_conversion_label: "" + this.getValueForToken("conversion_label") + "",
	  google_conversion_value: this.getValueForToken("conversion_value"),
	  google_conversion_format: "" + this.getValueForToken("conversion_format") + "",
	  google_conversion_color: "" + this.getValueForToken("conversion_color") + "";
	});
		/*~POST*/
	}
});