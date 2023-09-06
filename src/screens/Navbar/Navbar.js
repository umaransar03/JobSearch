import React from 'react'
import { AppBar, GlobalStyles, CssBaseline, Toolbar, Typography, Button, Container } from '@mui/material'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileNav } from './MobileNav';

export const Navbar = () => {


    const drawerWidth = 240;

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const mobileNav = (
        <MobileNav handleDrawerToggle={handleDrawerToggle} />
    );


    return (
        <div>
            <Container maxWidth='xl'>
                <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
                <CssBaseline />
                <AppBar
                    component='nav'
                    posittion='static'
                    color='default'
                    elevation={0}
                    sx={{ background: 'none' }}
                >
                    <Toolbar sx={{ flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ display: { md: 'none' }, px: 1.5 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box sx={{ display: { md: 'none', } }}>
                                <Button
                                    color='primary'
                                    variant='button'
                                    sx={{ my: 1, fontFamily: 'Rubik', fontWeight: 400 }}
                                >
                                    Sign In
                                </Button>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    sx={{ my: 1, mx: 1, fontFamily: 'Rubik', fontWeight: 700 }}
                                >
                                    Register
                                </Button>
                            </Box>
                        </Box>
                        <Typography variant='h5' component='h1' color='primary' noWrap className='JobSearch'
                            sx={{
                                display: { xs: 'none', md: 'block' },
                                flexGrow: 1,
                                fontFamily: "Abril Fatface",
                                cursor: 'pointer',
                                // bgcolor: 'white'
                                fontSize: 32
                            }} >
                            <span style={{ fontWeight: 700, }}>Job</span>Search
                        </Typography>
                        <nav>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, my: 1, mx: 1, fontFamily: 'Rubik' }}>
                                <Box sx={{ my: 1, }}>
                                    <Button color='primary' variant='button' sx={{ fontWeight: 700 }}>
                                        Home
                                    </Button>
                                    <Button color='primary' variant='button' sx={{ fontWeight: 700 }}>
                                        Jobs
                                    </Button>
                                    <Button color='primary' variant='button' sx={{ fontWeight: 700 }}>
                                        About
                                    </Button>
                                </Box>
                                <Button
                                    color='primary'
                                    variant='button'
                                    sx={{ my: 1, fontFamily: 'Rubik', fontWeight: 700, }}
                                >
                                    Sign In
                                </Button>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    sx={{ my: 1, mx: 1, fontFamily: 'Rubik', fontWeight: 700 }}
                                >
                                    Register
                                </Button>
                            </Box>
                        </nav>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {mobileNav}
                    </Drawer>
                </Box>
            </Container>
        </div>
    )
}


