import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

export const MyFAB = (props) => {
  const {
    sx = null,
    label = "Create",
    color = "primary",
    icon = <AddIcon />
  } = props;
  return (
    <Box
      sx={{ position: "fixed", bottom: "80px", right: "80px", zIndex: 1500 }}
    >
      <Fab sx={sx} aria-label={label} color={color}>
        {icon}
      </Fab>
    </Box>
  );
};
