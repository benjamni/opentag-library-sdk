//:include tagsdk-current.js

qubit.qtag.LibraryTag.define("struq.productpagetag.Tag", {
	config: {
		/*DATA*/
		name: "Product Page tag",
		async: true,
		description: "To be placed on the product page only",
		html: "",
		imageUrl: ".",
		locationDetail: "",
		priv: false,
		url: "",
		usesDocWrite: false,
		parameters: [
		{
			name: "Pixel ID",
			description: "",
			token: "id",
			uv: ""
		},
		{
			name: "Product ID",
			description: "",
			token: "product_id",
			uv: "universal_variable.product.id"
		}
	]
		/*~DATA*/
	},
	script: function() {
		/*SCRIPT*/

var _struqPI = _struqPI || [];
_struqPI.push(['injectTrackingPixel', {
  trackingPixelId: '' + this.getValueForToken("id") + '',
  route: '/s/s/',
  collectData: false,
  data: [{
    title: "detail",
    pid: "" + this.getValueForToken("product_id") + ""
  }],
  options: {
    timeoutMs: 2000
  }
}]);
var script = document.createElement("script");
script.src = "//media.struq.com/content/scripts/Struq_Pixel_Injector_min_v1-5.js";
document.body.appendChild(script);


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