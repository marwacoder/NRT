import React from 'react';
import {
  Dialog, MuiDialogActions, MuiDialogContent,
  MuiDialogTitle, Box, Typography, Button, withStyles,
  makeStyles, Paper, CloseIcon, IconButton, Grid
} from '../../mui';
import CheckOutForm from './CheckOutForm';


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
                 </DialogTitle>
                  <DialogContent >
                      <Box>
                        <CheckOutForm/>
                      </Box>
                      
        </DialogContent>
              </Dialog>
          </Paper>
          <Button variant="outlined" className={classes.bookNowBtn} color="secondary" onClick={handleClickOpen}>Book Now</Button>
    </Box>
  );
}

 
