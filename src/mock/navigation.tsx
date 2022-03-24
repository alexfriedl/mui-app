import PeopleIcon from "@mui/icons-material/People";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

export const NavigationItems = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    pathname: "/dashboard"
  },
  {
    label: "Employees",
    icon: <PeopleIcon />,
    pathname: "/employees"
  },
  {
    label: "Timesheets",
    icon: <InsertDriveFileIcon />,
    pathname: "/timesheets"
  },
  {
    label: "Approvals",
    icon: <AccessTimeFilledIcon />,
    pathname: "/approvals"
  }
];
