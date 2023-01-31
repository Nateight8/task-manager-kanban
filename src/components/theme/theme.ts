'use strict';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        // Applied to the <ul> element
        MuiMenu: {
            list: {
                backgroundColor: "#cccccc",
            },
        },
        // Applied to the <li> elements
        MuiMenuItem: {
            root: {
                fontSize: 12,
            },
        },
    },
});

export default theme;