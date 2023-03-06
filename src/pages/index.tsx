import { GetStaticProps, GetStaticPropsContext } from "next";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";

// Import Swiper styles

import { Board, Boards, Column } from "@/utils/interface";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Button,
  Toolbar,
} from "@mui/material";
import Task from "@/components/Tasks/Task";
import { useAppSelector } from "@/redux/store";
import theme from "@/components/theme/theme";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import DrawerComp from "@/components/Drawer/DrawerComp";
import DrawerTwo from "@/components/Drawer/DrawerTwo";
import Pannel from "@/components/Pannel";
// import "swiper/css/pagination";

type Props = {
  // data: Boards
  index: number;
};

function Home({}: Props) {
  return (
    <>
      {/* <Toolbar /> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <DrawerTwo /> */}
        <Pannel />
      </ThemeProvider>
    </>
  );
}

export default Home;

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {

//     const res = await fetch(`http://localhost:3500/boards`);
//     const data = await res.json();

//     return {
//         props: {
//             data,
//         }
//     }

// }
