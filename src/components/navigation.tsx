import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link, useLocation } from "react-router-dom";

import { NavigationItems } from "../mock/navigation";

export function MyNavigation(props) {
  const {
    mobileOpen,
    container,
    handleDrawerToggle
  }: {
    mobileOpen: boolean;
    container: any;
    handleDrawerToggle: (state: boolean) => void;
  } = props;
  const drawerWidth = 110;
  const location = useLocation();

  const isSelectedLocation = (pathname): boolean => {
    if (location.pathname === pathname) {
      return true;
    }
  };

  const list = (
    <List sx={{ color: "#999999" }}>
      {NavigationItems.map((item) => (
        <ListItem
          component={Link}
          button
          to={item.pathname}
          key={item.label}
          selected={isSelectedLocation(item.pathname)}
          sx={{
            display: "flex",
            flexFlow: "column nowrap",
            p: "20px 0",
            color: "#999999"
          }}
        >
          <ListItemIcon sx={{ minWidth: "initial" }}>{item.icon}</ListItemIcon>
          <ListItemText
            sx={{ lineHeight: "20px", fontSize: "122px !important" }}
            primary={item.label}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        PaperProps={{
          sx: {
            borderRight: "none",
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0
        }}
        open={mobileOpen}
        onClose={() => handleDrawerToggle(mobileOpen)}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
      >
        <Toolbar />
        {list}
      </Drawer>
      <Drawer
        PaperProps={{
          sx: {
            borderRight: "none",
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" }
        }}
        open
      >
        <Toolbar />
        {list}
      </Drawer>
    </Box>
  );
}
