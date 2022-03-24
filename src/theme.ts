import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  typography: {
    allVariants: {
      fontFamily:
        "Helvetica, Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      WebkitFontSmoothing: "antialiased"
    },
    h5: {
      color: "#666666",
      fontWeight: 700
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#f6f6f6",
          header: {
            boxShadow: "none !important"
          },
          main: {
            padding: "24px !important"
          },
          ".MuiListItem-root:hover": {
            background: "#f3f2f0"
          },
          "	.Mui-selected": {
            color: "black !important",
            background: "#F9F8F8 !important"
          },
          "	.Mui-selected:hover": {
            background: "#F3F2F0 !important"
          },
          ".Mui-selected svg": {
            fill: "black"
          },
          "nav .MuiTypography-root": {
            fontSize: 14
          }
        }
      }
    }
  }
});
