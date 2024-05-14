import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import { setMode } from "@/state";
import { IconButton, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";

const DarkMode = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <IconButton onClick={() => dispatch(setMode())}>
      {theme.palette.mode === "dark" ? (
        <DarkModeOutlined sx={{ fontSize: "25px" }} />
      ) : (
        <LightModeOutlined sx={{ fontSize: "25px" }} />
      )}
    </IconButton>
  );
};

export default DarkMode;
