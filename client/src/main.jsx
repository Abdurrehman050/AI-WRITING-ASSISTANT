import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ai from "./images/ai.png";

import { PrivyProvider } from "@privy-io/react-auth";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId="cm0z8fsda01xsbr1qnigcvdxb"
      config={{
        // Display email and wallet as login methods
        loginMethods: ["email", "wallet", "google", "github"],
        // Customize Privy's appearance in your app
        appearance: {
          theme: "dark",
          accentColor: "#676FFF",
          logo: ai,
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);
