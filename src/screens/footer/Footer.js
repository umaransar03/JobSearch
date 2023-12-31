import { Container, Typography, Box, Link, TextField, Button, } from '@mui/material'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const customTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#c3073f'
        },
    },
});

export const Footer = () => {
    return (
        <div>
            <ThemeProvider theme={customTheme}>
                <Container maxWidth='xl' sx={{ bgcolor: '#f8f8f8', pb: 8 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            pt: 4,
                        }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: { xs: 'block', md: 'space-between' },
                                alignItems: { xs: 'left', md: 'block' },
                                mx: 10,
                                my: 2,
                                width: '100%'
                            }}>
                            <Box sx={{ textAlign: 'left', width: { xs: 'auto', md: '30%' }, height: '100%' }}>
                                <Typography variant='h3' component='h1'
                                    sx={{
                                        fontFamily: "Abril Fatface",
                                        fontSize: 25,
                                        color: '#c3073f'
                                    }}
                                >
                                    <span style={{ fontWeight: 700, }}>Job</span>Search
                                </Typography>
                                <Typography variant='p' component='p'
                                    sx={{
                                        color: 'grey',
                                        fontFamily: 'Rubik',
                                        fontWeight: 400,
                                        lineHeight: 1.6,
                                        m: '16px 0 16px 0',
                                    }} >
                                    We offers a vareity of Jobs for all your Skills.
                                    Choose a Career that fits you.
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', }}>
                                    <Link sx={{ textDecoration: 'none', mb: 1.5, fontFamily: 'Rubik', mt: 1, fontWeight: 700, color: '#333333', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>
                                        +92-1520-1700
                                    </Link>
                                    <Link sx={{ textDecoration: 'none', mb: 1.5, fontFamily: 'Rubik', fontWeight: 700, color: '#333333', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>
                                        jobsearch@co.pk
                                    </Link>
                                    <Link sx={{ textDecoration: 'none', mb: 1.5, color: '#333333', fontFamily: 'Rubik', fontSize: 14, fontWeight: 400, ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>
                                        Website by umarAnsar
                                    </Link>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: 'left', width: { xs: 'auto', md: '30%' }, mt: { xs: 4, md: 0 } }}>
                                <Typography variant='h3' component='h1'
                                    sx={{
                                        fontFamily: 'Rubik',
                                        fontWeight: 700,
                                        fontSize: 25,
                                        color: '#333333'
                                    }}
                                >
                                    Company
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left', }}>
                                    <Link sx={{ textDecoration: 'none', mb: 0.5, mt: 2, fontWeight: 500, color: 'black', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>Islamabad</Link>
                                    <Link sx={{ textDecoration: 'none', mb: 0.5, fontWeight: 500, color: 'black', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>Careers</Link>
                                    <Link sx={{ textDecoration: 'none', mb: 0.5, fontWeight: 500, color: 'black', ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>Blog</Link>
                                    <Link sx={{ textDecoration: 'none', mb: 0.5, color: 'black', fontWeight: 500, ':hover': { color: '#c3073f', transition: '0.3s' }, cursor: 'pointer' }}>Mobile</Link>
                                    <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        gap: 1.5, 
                                        mt: 1,
                                        flexDirection: 'row', 
                                        textAlign: 'left',  
                                        color: '#333333'
                                        }}>
                                        <FacebookIcon sx={{'&:hover': {color: '#c3073f', transition: '0.2s', cursor: 'pointer'}}} />
                                        <TwitterIcon sx={{'&:hover': {color: '#c3073f', transition: '0.2s', cursor: 'pointer'}}}/>
                                        <InstagramIcon sx={{'&:hover': {color: '#c3073f', transition: '0.2s', cursor: 'pointer'}}}/>
                                        <EmailIcon sx={{'&:hover': {color: '#c3073f', transition: '0.2s', cursor: 'pointer'}}} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ textAlign: 'left', width: { xs: 'auto', md: '30%' }, mt: { xs: 4, md: 0 } }}>
                                <Typography variant='h3' component='h1'
                                    sx={{
                                        fontFamily: 'Rubik',
                                        fontWeight: 700,
                                        fontSize: 25,
                                        color: '#333333'
                                    }}
                                >
                                    Subscription
                                </Typography>
                                <Typography variant='p' component='p'
                                    sx={{
                                        color: 'grey',
                                        fontFamily: 'Rubik',
                                        fontWeight: 400,
                                        lineHeight: 1.6,
                                        m: '16px 0 16px 0',
                                    }} >
                                    Subscribe your Email address for latest news & updates.
                                </Typography>
                                <TextField label='Enter your email' fullWidth />
                                <Button variant='contained' size='large' sx={{ width: '100%', mt: 2, }} >Submit</Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    )
}
