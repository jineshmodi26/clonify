import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

export default function NestedList({data}) {
  const [open, setOpen] = React.useState({
    Dashboard: true,
    Messages: false,
    Frineds: false,
    Apps: false
  });

  const handleClick = (name) => {
    setOpen({
      ...open,
      [name]: !open[name]
    });
  };

  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper', paddingLeft: "5px", paddingRight: "5px", fontSize: "0.5 rem" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {data.map((menu) => {
        return <>
          <ListItemButton onClick={() => handleClick(menu.main)}>
          <img style={{marginRight: "10px"}} src={menu.logo}/> 
          <Typography sx={{marginRight: "auto", fontSize: "14px", color : open[menu.main] ? "#282828" : "#5F6980", fontWeight: "600", fontFamily: "Inter"}}>{menu.main}</Typography>
        {open[menu.main] ? <ExpandLess sx={{color: "#282828"}}/> : <ExpandMore sx={{color: "#5F6980"}}/>}
      </ListItemButton>
      <Collapse in={open[menu.main]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menu.sub.map((sub_menu) => {
            return <>
              <ListItemButton sx={{ pl: 6 }}>
                <Typography sx={{fontSize: "14px", fontWeight: "600", color: "#5F6980"}}>{sub_menu.name}</Typography>
              </ListItemButton>
            </>
          })}
        </List>
      </Collapse>
        </>
      })}
    </List>
  );
}