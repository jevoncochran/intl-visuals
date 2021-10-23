import { createContext, useState } from "react";

const SiteContext = createContext();

const SiteProvider = (props) => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const activateMobileNav = () => {
    setMobileNavActive(true);
  };

  const deactivateMobileNav = () => {
    setMobileNavActive(false);
  };

  return (
    <SiteContext.Provider
      value={{ mobileNavActive, activateMobileNav, deactivateMobileNav }}
    >
      {props.children}
    </SiteContext.Provider>
  );
};

const SiteConsumer = SiteContext.Consumer;

export { SiteContext, SiteConsumer };

export default SiteProvider;
