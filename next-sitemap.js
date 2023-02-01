const { homepage: siteUrl } = require("./package.json");

module.exports = {
	changefreq: "monthly",
	generateRobotsTxt: true,
	priority: 1,
	siteUrl,
};
