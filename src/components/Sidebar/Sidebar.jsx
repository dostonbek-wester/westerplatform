import * as React from "react";
import "./sidebar.css";
import { Data } from "../data/data";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink,useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const navigate = useNavigate()
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    navigate(event.pathname,{state:event})
  };
  const handleListItemClick1 = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div className="Sidebar">
      <Box>
        {Data.map((item, index) => (
          <div className="Card" key={index}>
            <ListItemButton
              id="ListButton"
              
              selected={selectedIndex === item.id}
              onClick={(event) => handleListItemClick1(event, item.id)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
            <List component="nav" aria-label="main mailbox folders" sx={{padding:0}}>
              {item.lessons.map((les, i) => (
                <ListItemButton
                  key={i}
                    // LinkComponent={NavLink}
                    // to={`${les.pathname}`}
                  selected={selectedIndex === les.id}
                  onClick={(event) => handleListItemClick(les, les.id)}
                >
                  <ListItemIcon>{les.icon}</ListItemIcon>
                  <ListItemText primary={les.title} />
                </ListItemButton>
              ))}
            </List>
          </div>
        ))}
      </Box>
    </div>
  );
}
