'use strict';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: { background: "#20212c" }

            }
        }
    }
});

export default theme;