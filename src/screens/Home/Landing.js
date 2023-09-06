import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import SignIn from '../SIgnIn/SignIn';

export const Landing = () => {


    return (
        <div>
            <Container maxWidth='xl' sx={{ bgcolor: '#333333', pb: 8 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row'},
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: {xs: '100%', md: '100vh'},
                    p: {xs: 4, md: 0},
                    pt: {xs: 12, md: 0},
                }}>
                    <Box component='div'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mt: 2,
                            mr: {xs: 'auto', md: 15},
                            zIndex: 3,
                            textAlign: 'center',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                        <Typography
                            sx={{
                                color: 'white',
                                lineHeight: 1.2,
                                fontFamily: 'Abril Fatface',
                                fontSize: {xs: 48, md: 68},
                                mb: 2.2,
                                ml: {xs: 0, md:4},
                                textAlign: {xs: 'center', md: 'left'}
                            }}>
                            Find a Job that Suits You
                        </Typography>
                        <Typography variant='p' component='p'
                            sx={{
                                color: 'grey',
                                fontFamily: 'Rubik',
                                fontWeight: 500,
                                lineHeight: 1.6,
                                ml: {xs: 0, md:4},
                                mb: '1rem',
                                textAlign: {xs: 'center', md: 'left'}
                            }} >
                            Welcome to JobSearch, your go-to destination for navigating 
                            the ever-evolving job market with ease. Whether you're a recent 
                            graduate embarking on your career journey or a seasoned professional 
                            seeking new opportunities.
                        </Typography>
                        <Box component='div' 
                        sx={{ 
                            width: '100%', 
                            display: 'flex', 
                            justifyContent: {xs: 'center', md: 'left'} ,
                            mt: {xs: 5, md: 2}
                            }}>
                            <Button variant='contained' size='large'
                            sx={{ ml: {xs: 0, md:4}, fontSize: '16px', fontWeight: 700, fontFamily: 'Rubik' }}
                            >
                                Find More
                            </Button>
                        </Box>
                    </Box>
                    <Box sx={{ zIndex: 2, width: '100%', }}>
                        <SignIn />
                    </Box>
                </Box>
            </Container>
        </div>
    )
}
