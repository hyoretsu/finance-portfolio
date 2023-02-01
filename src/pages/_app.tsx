/* eslint-disable camelcase */
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactElement } from "react";

import { siteName as site_name } from "./_document";

import "@public/global.css";

const url = "https://finance-portfolio.vercel.app";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
	const { pathname } = useRouter();

	return (
		<>
			<DefaultSeo
				defaultTitle={site_name}
				facebook={{ appId: String(process.env.NEXT_PUBLIC_FACEBOOK_APP_ID) }}
				openGraph={{
					images: [
						{
							url: `${url}/images/opengraph.jpg`,
							width: 1200,
							height: 627,
							alt: site_name,
						},
					],
					site_name,
					type: "website",
					url: url + pathname,
				}}
				titleTemplate={`%s | ${site_name}`}
				twitter={{
					cardType: "summary_large_image",
					handle: `${process.env.NEXT_PUBLIC_SITE_CONTENT_CREATOR}` || "@hyoretsu",
					site: `${process.env.NEXT_PUBLIC_SITE_OWNER}` || "@hyoretsu",
				}}
			/>
			{/* @ts-ignore */}
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
