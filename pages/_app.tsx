import "../global.scss";
import { wrapper } from '../app/store';

interface IProps {
  Component: any;
  pageProps: Record<string, unknown>;
}

function App({ Component, pageProps }:IProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)