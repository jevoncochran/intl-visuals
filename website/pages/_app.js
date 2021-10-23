import "../styles/globals.css";
import SiteProvider from "../context/siteContext";

function MyApp({ Component, pageProps }) {
  return (
    <SiteProvider>
      <Component {...pageProps} />
    </SiteProvider>
  );
}

export default MyApp;
