import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import { MyAppBar } from "./../components/app-bar";
import { MyNavigation } from "./../components/navigation";
import { MyDataGrid } from "./../components/data-grid";
import { MyTitle } from "./../components/title";
import { MyDrawer } from "./../components/drawer";
import { CreateEmployee } from "./../templates/create-employee";

export function EmployeesView(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const drawerWidth = 240;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavigationToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    setOpen(open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <MyAppBar handleDrawerToggle></MyAppBar>

      <MyNavigation
        props={{ window, mobileOpen, container, handleNavigationToggle }}
      ></MyNavigation>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px"
          }}
        >
          <MyTitle title="Employees"></MyTitle>
          <Button
            variant="outlined"
            endIcon={<AddIcon />}
            onClick={handleDrawer(true)}
          >
            Create
          </Button>
        </Box>
        <MyDrawer open={open} handleClose={handleDrawer(false)}>
          <CreateEmployee></CreateEmployee>
        </MyDrawer>
        <MyDataGrid>
          <Box>asdf</Box>
        </MyDataGrid>
      </Box>
    </Box>
  );
}

EmployeesView.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};
