import { Box, Container, TextField, Button, Typography, } from '@mui/material'
import Paper from '@mui/material/Paper';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Dropdown } from './Dropdown';
import { ScrollableJobs } from './ScrollableJobs';


export const Jobs = () => {


    return (
        <div>
            <Container maxWidth='xl' sx={{ bgcolor: 'white' }}>
                <Box component='div' sx={{ p: 4, pt: 10, pb: 15 }}>
                    <Typography
                        sx={{
                            color: '#333333',
                            lineHeight: 1.2,
                            fontFamily: 'Abril Fatface',
                            fontSize: { xs: 48, md: 68 },
                            mb: 5,
                            mt: { xs: 4, md: 8 },
                            textAlign: 'center'
                        }}>
                        Find Your Fit
                    </Typography>
                    <Paper sx={{ p: 7 }}>
                        <Box component='div'>
                            <Paper sx={{ bgcolor: '#333333', p: 4 }}>
                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <SearchIcon sx={{ height: '56px', mr: 2, fontSize: '35px' }} />
                                        <TextField
                                            id="Search"
                                            name="Search"
                                            label="Search Job here"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="outlined"
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <LocationOnIcon sx={{ height: '56px', mr: 2, fontSize: '35px' }} />
                                        <TextField
                                            id="Search"
                                            name="Search"
                                            label="Search by Location"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="outlined"
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', width: '100%' }}>
                                        <ApartmentIcon sx={{ height: '56px', mr: 2, fontSize: '35px' }} />
                                        <TextField
                                            id="Search"
                                            name="Search"
                                            label="Search by Company"
                                            fullWidth
                                            autoComplete="given-name"
                                            variant="outlined"
                                        />
                                    </Box>
                                    <Button variant='contained' sx={{ ml: 0, width: { xs: 'auto', md: '20%' } }}>
                                        <SearchIcon />
                                    </Button>
                                </Box>
                            </Paper>
                            <Dropdown />
                        </Box>
                    </Paper>
                    <Typography
                        sx={{
                            color: '#333333',
                            lineHeight: 1.2,
                            fontFamily: 'Abril Fatface',
                            fontSize: { xs: 38, md: 48 },
                            mt: { xs: 10, md: 14 },
                            textAlign: 'center'
                        }}>
                        Top Picks for You
                    </Typography>
                    <ScrollableJobs/>
                </Box>
            </Container>
        </div >
    )
}
