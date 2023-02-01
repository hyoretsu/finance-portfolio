import { NextSeo } from "next-seo";
import { IoMdCloseCircleOutline } from "react-icons/io";

import Container from "@hyoretsu/ui.styles/404";

const Error404: React.FC = () => {
	return (
		<>
			<NextSeo nofollow noindex />
			<Container>
				<IoMdCloseCircleOutline />
				<span>Error 404</span>
				<span>Not Found</span>
			</Container>
		</>
	);
};

export default Error404;
