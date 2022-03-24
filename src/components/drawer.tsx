import Drawer from "@mui/material/Drawer";

export const MyDrawer = (props): JSX.Element => {
  const { anchor = "right", open, handleClose, children } = props;

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={() => handleClose(open)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 10,
        ".MuiPaper-root": {
          padding: "24px 0",
          minWidth: 270,
          maxWidth: 700
        }
      }}
    >
      {children}
    </Drawer>
  );
};
