var stealTools = require("steal-tools");

var promise = stealTools.build({
	main: [
		"steal-multimain/main1",
		"steal-multimain/main2"
	],
	config: __dirname+"/package.json!npm"
},{
	minify: false,
	debug: true
});