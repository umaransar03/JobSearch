import { Box, Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'

export const Careers = () => {
    return (
        <div>
            <Container maxWidth='xl' sx={{ bgcolor: '#1e1e1e'}}>
                <Paper sx={{ p: 10, width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
                        <Box>
                            <Typography variant='h5' component='h5' color='primary'
                                sx={{
                                    flexGrow: 1,
                                    fontFamily: "Abril Fatface",
                                    cursor: 'pointer',
                                    fontSize: 38
                                }}>
                                Ready to Switch a Career?
                            </Typography>
                            <Typography variant='h5' component='h5'
                                sx={{
                                    flexGrow: 1,
                                    fontFamily: "Abril Fatface",
                                    cursor: 'pointer',
                                    fontSize: 30
                                }}>
                                Lets Get Started!
                            </Typography>
                        </Box>
                        <Button variant='outlined' size='large'
                            sx={{
                                fontFamily: 'Rubik',
                                fontWeight: 700,
                                fontSize: { xs: '20px', md: '16px' },
                                mt: { xs: 8, md: 0 },
                                height: { xs: '4rem', md: 'auto' }
                            }}>
                            Get Started
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </div>
    )
}
