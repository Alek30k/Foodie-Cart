"use client";

import { Toaster } from "@/components/ui/sonner";
import Header from "./_components/Header";
import { CartUpdateContext } from "./_context/CartUpdateContext";
import { useState } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const Provider = ({ children }) => {
  const [updateCart, setUpdateCart] = useState(true);

  return (
    <PayPalScriptProvider
      options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}
    >
      <CartUpdateContext.Provider value={{ updateCart, setUpdateCart }}>
        <div className="px-10 md:px-20 relative mb-20">
          <Header />
          <Toaster />
          {children}
        </div>
      </CartUpdateContext.Provider>
    </PayPalScriptProvider>
  );
};

export default Provider;
