import React from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";

export const MyAppBar = (props) => {
  const {
    handleDrawerToggle
  }: { handleDrawerToggle: (state: boolean) => void } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar
        sx={{
          backgroundColor: "white",
          color: "black",
          height: "56px",
          gridGap: "24px",
          padding: "0 16px !important"
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => handleDrawerToggle}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="caption"
          noWrap
          component="div"
          sx={{
            minWidth: "80px",
            backgroundColor: "#f3f2f0",
            textAlign: "center",
            borderRadius: "4px",
            padding: "0 4px",
            color: "#999 !important"
          }}
        >
          Company
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%"
          }}
        >
          <Box>
            <IconButton aria-label="avatar" component="span">
              <Badge color="primary" badgeContent={5}>
                <NotificationsIcon></NotificationsIcon>
              </Badge>
            </IconButton>
          </Box>
          <Box>
            <IconButton aria-label="avatar" component="span">
              <SettingsIcon></SettingsIcon>
            </IconButton>
          </Box>
          <Box>
            <IconButton
              aria-label="avatar"
              component="span"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar sx={{ width: 24, height: 24 }}></Avatar>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button"
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
