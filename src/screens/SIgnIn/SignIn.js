import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    pulsingGradientBorder: {
        position: 'relative',
        animation: '$pulsing-gradient-border 4s linear infinite',
        borderRadius: '8px',
    },
    '@keyframes pulsing-gradient-border': {
        '0%': {
            boxShadow: '0 0 0 0 rgba(189, 7, 61, 0.8)',
        },
        '50%': {
            boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.8)',
        },
        '100%': {
            boxShadow: '0 0 0 0 rgba(189, 7, 61, 0.8)',
        },
    },
}));



export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box component="form" onSubmit={handleSubmit}
                    noValidate
                    className={classes.pulsingGradientBorder}
                    sx={{
                        bgcolor: '#222222',
                        mt: 1, p: 5,
                        zIndex: 3,
                    }}>
                    <Typography component="h1" variant="h5" sx={{ fontFamily: 'Abril Fatface', mb: 2 }}>
                        Register Yourself to Start
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Sign Up Here"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}