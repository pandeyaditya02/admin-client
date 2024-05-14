import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "@/theme";
import Layout from "@/scenes/layout";
import Dashboard from "@/scenes/dashboard";
import Employee from "@/scenes/employee";
import Departments from "@/scenes/departments";
import Org from "@/scenes/org";
import Signin from "@/scenes/signin";
import Signup from "@/scenes/signup";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employee" element={<Employee />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/org" element={<Org />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
