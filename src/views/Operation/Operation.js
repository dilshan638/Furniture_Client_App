import React from 'react'
import PageHeader from "../Operation/Components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { TableBody, TableCell, TableRow, Table, TableHead } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(0.4),
        padding: theme.spacing(3)
    },
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },

}))

const headCellsTech = [
    { id: 'category_code', label: 'Cetegory Code' },
    { id: 'category_name', label: 'Cetegory Name' },
    { id: 'status', label: 'Status' },
    { id: 'actions', label: 'Actions' },
]


function Operation() {
    const classes = useStyles();
    const TblContainerTech = props => (
        <Table className={classes.table} >
            {props.children}
        </Table>
    )
    const TblheadTech = props => {
        return (<TableHead>
            <TableRow>
                {
                    headCellsTech.map(headCellsTech => (<TableCell key={headCellsTech.id}>
                        {headCellsTech.label}
                    </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }
    return (
        <>
            <PageHeader
                title="Stock Management"
                subTitle="Sandamali Furniture Stock management"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />

            <Paper className={classes.pageContent} >
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                            //  onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                            //  onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                            //  onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                            //  onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Paper>

            <Paper className={classes.pageContent} style={{ marginTop: '2rem' }}>
                <TblContainerTech>
                    <TblheadTech />

                    <TableBody>

                        <TableRow >
                            <TableCell> </TableCell>
                            <TableCell></TableCell>
                            <TableCell> </TableCell>
                              <TableCell></TableCell>

                        </TableRow>
                    </TableBody>
                </TblContainerTech>
            </Paper>
        </>
    )
}

export default Operation
