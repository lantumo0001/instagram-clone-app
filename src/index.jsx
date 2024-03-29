import React from "react";
import ReactDOM from "react-dom/client";

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { ChakraProvider } from "@chakra-ui/react";
// import application
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import AuthPage from "./pages/AuthPage/AuthPage"
import PageLayout from "./Layouts/pagelayout/PageLayout"
// import router 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import routes


// 2. extend the theme
const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.50", "#0f0f0f")(props),
      color: mode("gray.700", "#fff")(props),
    },
  }),
};

// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({ config, styles }); // Using styles in the theme object
// config router
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path:'/:username',
    element: <ProfilePage />,
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <RouterProvider router={router}>
    <PageLayout>
      <App />
    </PageLayout>
    </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
