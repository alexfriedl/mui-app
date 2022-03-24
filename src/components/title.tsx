import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material/styles";

export const MyTitle = (props) => {
  const { title, sx }: { title: string; sx: SxProps } = props;
  return (
    <Typography variant="h5" noWrap component="h1" sx={sx}>
      {title}
    </Typography>
  );
};
