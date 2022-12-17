import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { DataContext } from "./contexts/DataContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataContext>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </DataContext>
  </React.StrictMode>
);
