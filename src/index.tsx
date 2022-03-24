import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Theme } from "./theme";
import { EmployeesView } from "./views/employees";
import { TimesheetsView } from "./views/timesheets";
import { ApprovalsView } from "./views/approvals";
import { DashboardView } from "./views/dashboard";
import { DemoView } from "./views/demo";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/employees" replace />} />
          <Route path="employees" element={<EmployeesView />} />
          <Route path="timesheets" element={<TimesheetsView />} />
          <Route path="approvals" element={<ApprovalsView />} />
          <Route path="dashboard" element={<DashboardView />} />
          <Route path="demo" element={<DemoView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StyledEngineProvider>,
  document.querySelector("#app")
);
