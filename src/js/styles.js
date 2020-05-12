import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    spacing: 4,
    palette: {
        primary: purple,
        secondary: green
    },
    status: {
        danger: orange[500]
    },
    typography: {
        fontFamily: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'].join(',')
    }
});

export default responsiveFontSizes(theme);
