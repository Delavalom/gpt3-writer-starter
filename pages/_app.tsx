import { type AppType } from "next/app";
import './styles.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
export default MyApp;
