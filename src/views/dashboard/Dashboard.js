import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  root: {
      backgroundColor: '#fdfdff',
      minHeight: 746
  },
  pageHeader: {
      padding: theme.spacing(4),
      display: 'flex',
      marginBottom: theme.spacing(2)
  },


}))

function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={0} square className={classes.root}>
                <div className={classes.pageHeader}>

                    <h2>Dashboard</h2>

                </div>
            </Paper>
    </>
  )
}

export default Dashboard
