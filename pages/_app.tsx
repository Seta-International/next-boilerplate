import { AppProps } from 'next/app';
import '../global.scss';
import { wrapper } from '../app/store';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
