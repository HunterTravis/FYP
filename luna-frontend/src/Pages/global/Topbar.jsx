import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      display="flex"
      className="topbar"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <Box display="flex" height="5vh" borderRadius="3px">
        <img src="images/logo.png" alt="LUNA" />
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon className="buttono" />
          ) : (
            <LightModeOutlinedIcon className="buttono" />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon className="buttono" />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon className="buttono" />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon className="buttono" />
        </IconButton>
      </Box>
    </Box>
  );
};
export default Topbar;
