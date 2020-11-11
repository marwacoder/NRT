import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

import {Box,Avater,Divider,Button, PhotoCameraIcon, EditIcon, Grid, OutlinedInput, InputLabel,
    InputAdornment, FormControl, IconButton, Person} from '../../mui'
const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    },
    profilePicContainer: {
    
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    },
    profilePic: {
        width: 100,
        height: 100
    },
    editIcon: {
    position: 'absolute',
    top: '26%',
    left: '51%',
    zIndex: 50,
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('xs')]: {
      left: '54%',
      top: '26%'
    }
    },
    btn: {
        [theme.breakpoints.down('xs')]: {
            marginTop: -10
        }
    }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [editInfo, setEditInfo] = React.useState(false);

    const handleEditInfo = () => {
    setEditInfo((prev)=> !prev)
}

    return (
        <Box mx={{ xs: 2, sm: 8, md: 38 }} my={2}>
            
            <form>
                <Box >
                    <Box className={classes.editIcon}><IconButton
                  aria-label="toggle"
                  size="large"
              edge="start"
              color="inherit"
             
              ><PhotoCameraIcon/></IconButton></Box>
                    
                    
                <Grid container justify='center' alignContent="center" spacing={1}>
                        <Grid item container justify='center' alignContent="center" >
                            <Grid item>
                                <Box >
                                    
                                    <Avater className={classes.profilePic} src={require('../../assets/profilePic.jpg')} />
                                    
            </Box>
                            </Grid>
                            
                    </Grid>
                    <Grid item xs={12} sm={6}>
                                <FormControl  variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">First Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
                        />
                    </FormControl>
                    </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Last Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Phone Number</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Gender</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                                <Grid item xs={12} sm={6}><FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Street</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">City</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">State</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                            </FormControl></Grid>
                        <Grid item xs={12} sm={4}>
                            
                            </Grid>
                        <Grid item xs={12} sm={4}>
                            
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box component="div" className={classes.btn} > <Button variant="contained" color="secondary" fullWidth>Save</Button></Box>
                                </Grid>
        </Grid>
                   </Box>         
                </form>
            
            </Box>
  );
}