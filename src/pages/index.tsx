import { NextSeo } from "next-seo";

import { siteName as title } from "./_document";

const description =
	"A project that aims to be a comprehensive, easy to use, tool to manage and rebalance your investment portfolio.";

const Homepage: React.FC = () => {
	return (
		<>
			<NextSeo description={description} openGraph={{ description, title }} title={title} />
		</>
	);
};

export default Homepage;
