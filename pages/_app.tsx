import Head from "next/head";
import "../styles/globals.css";
import React from "react";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }): JSX.Element {
	return ( <>
		<Head>
			<title>My top 123</title>
			<link rel="icon" href="favicon.ico" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
		</Head>
		<Component { ...pageProps } />
	</> );
}

export default MyApp;
