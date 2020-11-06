import React from 'react';
import {
    Dialog, MuiDialogActions, MuiDialogContent,
    MuiDialogTitle, Box, Typography, Button, withStyles,
    makeStyles, Paper, CloseIcon, IconButton, Grid
} from '../../mui'
const styles = (theme) => ({
  root: {
    margin: 0,
        padding: theme.spacing(2),
        width: 100,
textField: {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
    },
  
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, open, handleClose, ...other } = props;
  
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
     {open ?  <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton> : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '38ch',
  },
  bookNowBtn: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  }
    }));
export default function TrainPaymentDetails(props) {
    const classes = useStyles();
    
  const {handleClose,open, handleClickOpen} = props

  return (
    <Box>
      <Paper>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}  fullWidth={true}>
        <DialogTitle id="customized-dialog-title" open={open} handleClose={handleClose}>
          <Box width={250} >Train & Payment Details</Box>
        </DialogTitle>
                  <DialogContent dividers>
                      <Box>
              <Grid container alignContent="center" justify="flex-start" spacing={2}>
                <Grid container alignContent="center" justify="flex-start" item>
                  <Grid item xs sm={6}>
                  <Box>PNR Number</Box>
                </Grid>
                <Grid item xs sm={6}>
                  <Box>{3343554433}</Box>
                </Grid>
                </Grid>
                <Grid container alignContent="center" justify="flex-start" item>
                  <Grid item xs sm={6}>
                  <Box>Full Name</Box>
                </Grid>
                <Grid item xs sm={6}>
                  <Box>Usman Jibril Mohammed</Box>
                </Grid>
                </Grid>
                <Grid container alignContent="center" justify="flex-start" item>
                  <Grid item xs sm={6}>
                  <Box>Train Name & Number</Box>
                </Grid>
                <Grid item xs sm={6}>
                  <Box>Echo/#55445</Box>
                </Grid>
                </Grid>
                <Grid container alignContent="center" justify="flex-start" item>
                  <Grid item xs sm={6}>
                  <Box>Class</Box>
                </Grid>
                <Grid item xs sm={6}>
                  <Box>Executive (AL)</Box>
                </Grid>
                </Grid>
                <Grid container alignContent="center" justify="flex-start" item>
                  <Grid item xs sm={6}>
                  <Box>From</Box>
                </Grid>
                <Grid item xs sm={6}>
                  <Box>Abuja</Box>
                  </Grid>
                  <Grid item xs sm={6}>
                  <Box>To</Box>
                </Grid>
                <Grid item xs sm={6}>
                  <Box>Kaduna</Box>
                </Grid>
                </Grid>
                <Grid container alignContent="center" justify="flex-start" item>
                  <Grid item xs sm={6}>
                  <Box>Departure</Box>
                </Grid>
                <Grid item xs sm={6}>
                  <Box>7:00</Box>
                </Grid>
                </Grid>
                <Grid container alignContent="center" justify="flex-start" item>
                  <Grid item xs sm={6}>
                  <Box>Arrival</Box>
                </Grid>
                <Grid item xs sm={6}>
                  <Box>12:00</Box>
                </Grid>
                </Grid>
                <Grid container alignContent="center" justify="flex-start" item>
                  <Grid item xs sm={6}>
                  <Box>Duration</Box>
                </Grid>
                <Grid item xs sm={6}>
                  <Box>5 Hrs</Box>
                </Grid>
                </Grid>
                          </Grid>
                      </Box>
                      
        </DialogContent>
                  <DialogActions>
                          

                          <Box mx={1} width={100}><Button  color="primary" variant="contained" color="secondary" fullWidth>Pay</Button></Box>
        </DialogActions>
              </Dialog>
          </Paper>
          <Button variant="outlined" className={classes.bookNowBtn} color="secondary" onClick={handleClickOpen}>Book Now</Button>
    </Box>
  );
}

 
