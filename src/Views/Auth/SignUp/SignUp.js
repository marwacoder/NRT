import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Person from '@material-ui/icons/PersonOutline';
import Call from '@material-ui/icons/Call';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
    width: '40ch',
  },
    }));
export default function CustomizedDialogs(props) {
const classes = useStyles();
    
    
    const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
      <Paper elevation={0}>
                  <form>
                    
                      <div>
                          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            endAdornment={
              <InputAdornment position="end">
                   <Person />
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
              </div>
              <div>
                          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Phone Number</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            endAdornment={
              <InputAdornment position="end">
                   <Call />
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </div>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
          </form>
              </Paper>
  );
}