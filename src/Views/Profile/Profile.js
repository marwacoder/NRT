import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import {Box,Avater,Divider,Button, Paper, EditIcon, Grid, OutlinedInput, InputLabel,
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
    top: '80%',
    left: '50%',
        transform: 'translate(-50%, -50%)',

    },
    profilePic: {
        width: 100,
        height: 100
    }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);



    return (
        <Box m={1}>
      <Paper elevation={0}>
    <Card className={classes.root}>
      
          
                    <CardActionArea>
                        <Box mb={-10}>
              <CardHeader
        
        action={
             <IconButton
            aria-label="show more"
              
              aria-haspopup="true"
              
              color="inherit"
                          >
            <EditIcon />
          </IconButton>
        }
        title="My Profile"
                  />
                  </Box>
        <CardMedia
          className={classes.media}
          image={require('../../assets/header.jpeg')}
          
                        />
                        <Box className={classes.profilePicContainer}>
                      <Avater className={classes.profilePic} src={require('../../assets/profilePic.jpg')}/>      
                        </Box>
                    </CardActionArea>
                </Card>
                
                <Grid container justify='center' alignContent="center">
                    
                        <form>
                        <Box mx={2}>
                            <Grid item>
                                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">First Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl>
                            </Grid>
                        <Grid item><FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Last Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                                <Grid item><FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Phone Number</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                                <Grid item><FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                                <Grid item><FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Gender</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                                <Grid item>
                                <Box ml={1}>Address</Box></Grid>
                                <Grid item><FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">Street</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                                <Grid item><FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">City</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                                </FormControl></Grid>
                                <Grid item><FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-password">State</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={ 'text' }
            labelWidth={70}
          />
                            </FormControl></Grid>
                            
                            <Grid item>
                                <Box m={2}><Button variant="contained" color="secondary" fullWidth>Update</Button></Box>
                                </Grid>
                                
                            </Box>
                            </form>
                    </Grid>
            </Paper>
            </Box>
  );
}