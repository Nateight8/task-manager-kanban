import React, { useState } from "react";
import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ButtonGroup,
  Button,
  Typography,
  ListItemIcon,
  Tabs,
  Tab,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Pannel from "../Pannel";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
type Props = {};

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   toolbar: theme.mixins.toolbar,
// }));

export default function DrawerTwo({}: Props) {
  const [open, setopen] = useState(false);
  const drawerWidth = 240;
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    background: "#2b2c37",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    background: "#2b2c37",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const handleDrawerClose = () => {
    setopen(!open);
  };
  const theme = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (
    event: React.SyntheticEvent<Element>,
    newValue: number
  ) => {
    setActiveTab(newValue);
  };

  return (
    <div style={{ display: "flex" }}>
      <Drawer
        // sx={{ width: 280, flexShrink: 0, "&:paper": { width: 720 } }}
        variant="permanent"
        open={open}
      >
        <div />

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={handleTabChange}
          aria-label="sidebar tabs"
        >
          {[1, 2, 3, 4].map((item) => (
            <Tab
              key={item}
              sx={{
                justifyContent: "start",
                flexDirection: "row",
                color: "white",
                "& .MuiTab-icon": { color: "currentColor" },
              }}
              label="PLATFORM LAUNCH"
              icon={
                <Box
                  sx={{
                    minWidth: "56px",
                    display: "FLEX",
                    justifyContent: "START",
                  }}
                >
                  <DashboardIcon sx={{ color: "white" }} />
                </Box>
              }
            />
          ))}
        </Tabs>
      </Drawer>
      <main>
        <Pannel />
      </main>
    </div>
  );
}
