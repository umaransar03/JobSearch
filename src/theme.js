import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#c3073f'
        },
        secondary: {
            main: '#000000'
        },
        text: {
            primary: '#a9a9a9'
        }

    },
    shape: {
        borderRadius: 10
    }
});

export default theme;