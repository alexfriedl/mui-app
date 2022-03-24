import {
  GridColDef,
  GridRowsProp,
  GridApi,
  GridCellValue
} from "@mui/x-data-grid-pro";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { stringAvatar } from "./../util/avatars";

export const Rows: GridRowsProp[] = [
  {
    id: 1,
    firstname: "John",
    lastname: "Travolta",
    name: "John Travolta",
    nickname: "Johnny",
    employeeId: 12348753
  },
  {
    id: 2,
    firstname: "Marry",
    lastname: "Poppins",
    name: "Marry Poppins",
    nickname: "Marry",
    employeeId: 34754385
  },
  {
    id: 3,
    firstname: "Walter",
    lastname: "Matthau",
    name: "Walter Matthau",
    nickname: "Walt",
    employeeId: 98734538
  },
  {
    id: 4,
    firstname: "Christoph",
    lastname: "Waltz",
    name: "Christoph Waltz",
    nickname: "Chris",
    employeeId: 34857874
  },
  {
    id: 5,
    firstname: "Ricky",
    lastname: "Gervais",
    name: "Ricky Gervais",
    nickname: "Rick",
    employeeId: 98238483
  },
  {
    id: 6,
    firstname: "Jennifer",
    lastname: "Lawrence",
    name: "Jennifer Lawrence",
    nickname: "J.Lo",
    employeeId: 14232344
  },
  {
    id: 7,
    firstname: "Shaq",
    lastname: "O'Neal",
    name: "Shaq O'Neal",
    nickname: "Shaq",
    employeeId: 23423423
  },
  {
    id: 8,
    firstname: "Christopher",
    lastname: "Wallace",
    name: "Christopher Wallace",
    nickname: "Biggie",
    employeeId: 82734792
  },
  {
    id: 9,
    firstname: "Theodor",
    lastname: "Fontane",
    name: "Big F",
    nickname: "Biggie",
    employeeId: 98734343
  },
  {
    id: 10,
    firstname: "John",
    lastname: "Travolta",
    name: "John Travolta",
    nickname: "Johnny",
    employeeId: 12348753
  },
  {
    id: 11,
    firstname: "Marry",
    lastname: "Poppins",
    name: "Marry Poppins",
    nickname: "Marry",
    employeeId: 34754385
  },
  {
    id: 12,
    firstname: "Walter",
    lastname: "Matthau",
    name: "Walter Matthau",
    nickname: "Walt",
    employeeId: 98734538
  },
  {
    id: 13,
    firstname: "Christoph",
    lastname: "Waltz",
    name: "Christoph Waltz",
    nickname: "Chris",
    employeeId: 34857874
  },
  {
    id: 14,
    firstname: "Ricky",
    lastname: "Gervais",
    name: "Ricky Gervais",
    nickname: "Rick",
    employeeId: 98238483
  },
  {
    id: 15,
    firstname: "Jennifer",
    lastname: "Lawrence",
    name: "Jennifer Lawrence",
    nickname: "J.Lo",
    employeeId: 14232344
  },
  {
    id: 16,
    firstname: "Shaq",
    lastname: "O'Neal",
    name: "Shaq O'Neal",
    nickname: "Shaq",
    employeeId: 23423423
  },
  {
    id: 17,
    firstname: "Christopher",
    lastname: "Wallace",
    name: "Christopher Wallace",
    nickname: "Biggie",
    employeeId: 82734792
  },
  {
    id: 18,
    firstname: "Theodor",
    lastname: "Fontane",
    name: "Big F",
    nickname: "Biggie",
    employeeId: 98734343
  }
];

export const Columns: GridColDef[] = [
  {
    field: "avatar",
    headerName: "Avatar",
    width: 80,
    align: "center",
    renderCell: (params) => {
      return <Avatar {...stringAvatar(`${params.row.name}`)} />;
    }
  },
  { field: "firstname", headerName: "Firstname", width: 150, editable: true },
  { field: "lastname", headerName: "Lastname", width: 150, editable: true },
  { field: "name", headerName: "Name", width: 150, hide: true },
  { field: "nickname", headerName: "Nickname", width: 150, editable: true },
  { field: "employeeId", headerName: "Employee ID", width: 150 },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    width: 60,
    align: "center",
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation();

        const api: GridApi = params.api;
        const thisRow: Record<string, GridCellValue> = {};

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };

      return (
        <IconButton onClick={onClick}>
          <MoreVertIcon></MoreVertIcon>
        </IconButton>
      );
    }
  }
];
