import React from 'react';

import {
  Paper, withStyles, Button, Dialog,Box, MuiDialogTitle,MuiDialogActions,
  IconButton, CloseIcon, Typography, makeStyles, MuiDialogContent
} from '../../mui'
import SignIn from '../Auth/SignIn/SignIn';
import SignUp from '../Auth/SignUp/SignUp'

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
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
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
    }));
export default function CustomizedDialogs(props) {
    const classes = useStyles();
    
    const [toggleAuth, setToggleAuth] = React.useState(false);
    
    const handleToggleAuthForm = () => {
        setToggleAuth((prev) => !prev)
    }
  const {handleClose,open} = props

  return (
    <div>
      <Paper>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Box ml={2}>{toggleAuth === false ? "SignIn" : "SignUp"}</Box>
        </DialogTitle>
        <DialogContent dividers>
                  {toggleAuth === false ? <SignIn/>: <SignUp/>  }
        </DialogContent>
                  <DialogActions>
                      <div>
                          
                          
         <div style={{paddingBottom: 10}}> <Button fullWidth  onClick={handleClose} color="secondary" variant="contained">
                     <span style={{color: '#fff'}}>{ toggleAuth === false ? "Sign In": "Sign Up"}</span> 
                          </Button></div>
                          <div>{toggleAuth === false ? "Don't have an account?": "Already have an account?" }  <Button onClick={handleToggleAuthForm} color="primary">{toggleAuth === false ? "Sign Up": "Sign In"}</Button></div>
                      </div>
                      
        </DialogActions>
              </Dialog>
              </Paper>
    </div>
  );
}