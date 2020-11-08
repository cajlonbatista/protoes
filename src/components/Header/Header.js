import React, { useState } from "react";

import { Link } from "react-router-dom";
import { ListItem, Menu, MenuItem } from "@material-ui/core";

import { HeaderContainer } from "./styles";

export default function Header () {

    const [anchor, setAnchor] = useState(null);
    const [about, setAbout] = useState(null);

    const handleClickAnchor = (event) => {
      setAnchor(event.currentTarget);
    };
  
    const handleCloseAnchor = () => {
      setAnchor(null);
    };
    const handleClickAbout = (event) => {
        setAbout(event.currentTarget);
      };
    
      const handleCloseAbout = () => {
        setAbout(null);
      };
    return (
      <HeaderContainer>
        <Link to="#" onClick={handleClickAnchor}>
          <ListItem button>File</ListItem>
        </Link>
        <Menu
          id="simple-menu"
          anchorEl={anchor}
          keepMounted
          open={Boolean(anchor)}
          onClose={handleCloseAnchor}
        >
          <MenuItem onClick={handleCloseAnchor} style={{ fontFamily: 'Inter, sans-serif' ,fontSize: 12, border: 1}}>Close</MenuItem>
        </Menu>
        <Link to="#">
          <ListItem button>Settings</ListItem>
        </Link>
        <Link to="#" onClick={handleClickAbout}>
          <ListItem button>Help</ListItem>
        </Link>
        <Menu
          anchorEl={about}
          keepMounted
          open={Boolean(about)}
          onClose={handleCloseAbout}
        >
          <MenuItem onClick={handleCloseAbout} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12}}>About</MenuItem>
          <MenuItem onClick={handleCloseAbout} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12}}>Docs</MenuItem>
          <MenuItem onClick={handleCloseAbout} style={{ fontFamily: 'Inter, sans-serif', fontSize: 12}}>Report problem</MenuItem>
        </Menu>
      </HeaderContainer>
    );
}
