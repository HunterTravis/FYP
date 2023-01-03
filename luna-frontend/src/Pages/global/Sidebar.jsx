import { useState } from "react";
import {ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import MenuOutlineIcon from "@mui/icons-material/MenuOutlined";
const Sidebar2 = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-menu-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-inner-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed())}
            icon={isCollapsed ? <MenuOutlineIcon /> : undefined}
            style={{ margin: "10px 0px 20px 0px", color: colors.grey[100] }}
          >
            {!isCollapsed && (
                <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">  
                    <Typography>
                        Luna
                    </Typography>
                    <IconButton>
                        <MenuOutlineIcon/>
                    </IconButton>
                </Box>
            )
}
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
export default Sidebar2;
