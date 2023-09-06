import React from 'react'
import {Typography, Divider} from '@mui/material'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const MobileNav = (props) => {


  return (
    <div>
        <Box onClick={props.handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography  variant='h5' component='h1' color='primary' noWrap
            sx={{ color: '#c3073f', my: 2, cursor: 'pointer',fontFamily: "Abril Fatface", }}>
                <span style={{ fontWeight: 700, }}>Job</span>Search
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton  sx={{ textAlign: 'center', fontFamily: 'Rubik' }}>
                        <ListItemText primary={"Home"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton  sx={{ textAlign: 'center', fontFamily: 'Rubik' }}>
                        <ListItemText primary={"Jobs"} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton  sx={{ textAlign: 'center', fontFamily: 'Rubik' }}>
                        <ListItemText primary={'About'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </div>
  )
}
