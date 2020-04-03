import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { cyan } from '@material-ui/core/colors';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        secondary: {
            main: cyan[700]
        },
    },
});
theme = responsiveFontSizes(theme);

function Theme(props) {

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default Theme;