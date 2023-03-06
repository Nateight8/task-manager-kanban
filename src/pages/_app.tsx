import DrawerComp from "@/components/Drawer/DrawerComp";
import Navbar from "@/components/Navbar/Navbar";
import { store } from "@/redux/store";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Box from "@mui/material/Box";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Box sx={{}}>
        <Navbar />
        <Component {...pageProps} />
        {/* <DrawerComp /> */}
      </Box>
    </Provider>
  );
}
