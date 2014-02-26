//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("coremetrics.coremetricsconversionevents.Tag", {
	config: {
		/*DATA*/
		name: "CoreMetrics - Conversion Events",
		async: true,
		description: "Track custom conversion events with CoreMetrics. Note that this tag depends on other CoreMetrics tags having already loaded on the page.",
		html: "",
		imageUrl: "https://s3-eu-west-1.amazonaws.com/opentag-images/coremetrics.gif",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Event ID",
			description: "A unique identifier for the type of conversion, such as “Account Creation” or “Special Registration\"",
			token: "event_id",
			uv: ""
		},
		{
			name: "Action Type",
			description: "A value of “1” or “2” depending upon whether a successful conversion is generated.",
			token: "action_type",
			uv: ""
		},
		{
			name: "Event category id",
			description: "Allows grouping of event IDs into categories.",
			token: "event_category_id",
			uv: ""
		},
		{
			name: "Points",
			description: "A point value used in establishing an arbitrary “value” for a conversion.",
			token: "points",
			uv: ""
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

  cmCreateConversionEventTag(
    "" + this.getValueForToken("event_id") + "",
    "" + this.getValueForToken("action_type") + "",
    "" + this.getValueForToken("event_category_id") + "",
    "" + this.getValueForToken("points") + ""
  );


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