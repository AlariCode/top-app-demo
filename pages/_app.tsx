import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <Component {...pageProps} />;
}

export default MyApp;
