import React, { useState } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import { MyContext } from '@/store';

const Layout = ({ children }) => {
  const [storeData, setStoreData] = useState({
    messageOpen: false,
    email: 'alissa@chengyiauto.cn'
  });
  
  return (
    <div>
      <MyContext.Provider value={{storeData, setStoreData}}>
        <Header />
        <main>{children}</main>
        <Footer />
      </MyContext.Provider>
    </div>
  );
};

export default Layout;
