import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.light
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700
    }
});

const CustomizedTable = props => {
    const classes = useStyles();
    const { headers, data, keys } = props;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {headers.map((t, i) => (
                            <StyledTableCell key={t} align={i > 0 ? 'right' : 'left'}>
                                {t}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(row => (
                        <StyledTableRow key={row.id}>
                            {keys.map((k, j) =>
                                j === 0 ? (
                                    <StyledTableCell key={row.id + row[k]} component="th" scope="row">
                                        {row[k]}
                                    </StyledTableCell>
                                ) : (
                                    <StyledTableCell key={row.id + row[k]} align="right">
                                        {row[k]}
                                    </StyledTableCell>
                                )
                            )}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomizedTable;
