import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGridPro,
  GridToolbar,
  GridRowsProp,
  GridColDef,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport
} from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";
import { styled } from "@mui/material/styles";
import { Columns, Rows } from "./../mock/data-grid";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: 400,
  width: "100%",
  backgroundColor: "white",
  justifyContent: "space-between",
  height: "calc(100vh - 168px)"
}));

export function MyDataGrid(props) {
  const { isDemo = false }: { isDemo: boolean } = props;
  const { loading, data } = useDemoData({
    dataSet: "Employee",
    rowLength: 100,
    maxColumns: 40,
    editable: true
  });

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer
        sx={{
          backgroundColor: "#f6f6f6",
          width: "calc(100% + 2px)",
          padding: "0",
          margin: "-1px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "relative",
          borderBottom: "1px solid rgba(224, 224, 224, 1)",
          button: {
            padding: "8px 16px !important",
            fontSize: 14,
            borderRadius: 0,
            textTransform: "capitalize",
            color: "#747174"
          }
        }}
      >
        <GridToolbarColumnsButton color="inherit" />
        <GridToolbarFilterButton color="inherit" />
        <GridToolbarDensitySelector color="inherit" />
        <GridToolbarExport color="inherit" />
      </GridToolbarContainer>
    );
  };

  const [pageSize, setPageSize] = React.useState<number>(15);

  const rows: GridRowsProp = Rows;
  const columns: GridColDef[] = Columns;

  const DataGrid = () => (
    <DataGridPro
      components={{ Toolbar: CustomToolbar }}
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[15, 50, 500]}
      pagination
      density="comfortable"
      localeText={{ toolbarColumns: "Columns" }}
      checkboxSelection
      initialState={{
        pinnedColumns: { left: ["__check__", "avatar"], right: ["action"] },
        sorting: { sortModel: [{ field: "lastname", sort: "asc" }] }
      }}
      sx={{
        "& .MuiDataGrid-columnHeaderTitle": {
          fontWeight: "600",
          fontSize: 13,
          color: "#747174",
          background: "#E7E5E2"
        },
        "& .MuiDataGrid-pinnedColumnHeaders": {
          backgroundColor: "#E7E5E2"
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#E7E5E2"
        }
      }}
    />
  );

  const DemoDataGrid = () => (
    <DataGridPro
      {...data}
      components={{
        Toolbar: GridToolbar
      }}
      loading={loading}
      checkboxSelection
      disableSelectionOnClick
      rowThreshold={0}
      initialState={{
        ...data.initialState,
        pinnedColumns: { left: ["__check__", "desk", "__avatar__"] }
      }}
    />
  );

  return (
    <StyledBox>
      {isDemo ? <DemoDataGrid></DemoDataGrid> : <DataGrid></DataGrid>}
    </StyledBox>
  );
}
