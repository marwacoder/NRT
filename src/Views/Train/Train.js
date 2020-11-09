import React from 'react';

import {
  makeStyles, Fade, PlaceIcon, DateRangeIcon, Button,
  Paper, Card, Menu, MenuItem, NavigateNext, ButtonGroup,
  ArrowDropDownIcon, IconButton, Typography, Grow,
  Box, Grid, AppBar, Toolbar, NavigateBefore,
} from '../../mui';
import { indigo } from '@material-ui/core/colors';
import TrainPaymentDetails from '../TrainPaymentDetails/TrainPaymentDetails'


const useStyles = makeStyles((theme) => ({
  root: {
    margin: 45,
    [theme.breakpoints.between('xs', 'sm', 'md')]: {
      margin: 20
    }
  },
  expandMore: {
    marginLeft: 170,
    [theme.breakpoints.down('md')]: {
      marginLeft: 130
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 200,
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 200
    }
  },
  icons: {
    fontSize: 50,
    [theme.breakpoints.down('md')]: {
      fontSize: 30
    }
  },
  fontSize: {

  },
  avail: {
    cursor: 'pointer',
    margin: '3px 0px',
    textDecoration: 'underline',
    
  },
  appBarItem: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      marginLeft: -25
    }
  },
  secondAppBar: {
    backgroundColor: indigo[50],
    minHeight: 30,
    
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#fff',
      
      
    }
  },
  tn: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 0
      
      
    }
  },
  trainBookInfo: {
    marginTop: '10px',

    [theme.breakpoints.down('xs')]: {
      marginTop: '-513px',
      marginLeft: '170px'
    }
  },
 
  heading: {
    
    [theme.breakpoints.down('sm')]: {
      marginBottom: '30px'
    }
  },
  card: {
    backgroundColor: theme.palette.background.paper
  },
  
  availProb: {
    marginTop: '23px',
    marginLeft: 60,
    [theme.breakpoints.down('sm')]: {
      
      fontSize: 14,
      marginLeft: 50,
      marginTop: 25,

    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  duration: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 16
    }
  },
  classes: {
    marginTop: '22px',
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
      marginLeft: 20,
      width: 80
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 35,
      marginLeft: 0
    }
  },
  departure: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 20
    }
  },
  arrival: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 16
    }
  },
  fare: {
    marginTop: '30px',
    [theme.breakpoints.down('sm')]: {
      marginTop: 40,
      
    },
    
  },
  action: {
    marginTop: '23px',
    marginLeft: 10,
    [theme.breakpoints.down('sm')]: {
      marginTop: 15,
      width: 150
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0
    }
  },
  buttonGroup: {
    
    [theme.breakpoints.down('sm')]: {
      width: 20
    }
  },
  btnAvail: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 13
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 12
    }
  },
  class: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 30
    }
  },
  availability: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 20
    }
  },
  headerAction: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 20
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 1
    }
  },
  headerArrival: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 5
    }
  },
  headerAvailability: {
    marginLeft: 60,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 20
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 1
    }
  },
  headerClasses: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 15
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 1
    }
  },
  headerDeparture: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: -15
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 1
    }
  }
  
  
}))

const Train = (props) => {
  const { darkState } = props;
  const [MenuAnchorEl, setMenuAnchorEl] = React.useState(null);
 const [toggle, setToggle] = React.useState(false);
  const isMenuOpen = Boolean(MenuAnchorEl);
  const classes = useStyles();

const handleClickOpen = () => {
    setToggle(true);
  };
  const handleClose = () => {
    setToggle(false);
  };
  const handleMenu = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };


  
  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={MenuAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <p>Executive</p>
      </MenuItem>
      <MenuItem>
        <p>Business</p>
      </MenuItem>
      <MenuItem onClick={handleMenu}>
        <p>Premium</p>
      </MenuItem>
      <MenuItem onClick={handleMenu}>
        <p>Standard</p>
      </MenuItem>
    </Menu>
  );


  return (
    <Box className={classes.root}>
      
      <Box mb={2}>
        
        <Paper   elevation={0}  variant="outlined">
          <Box mx={2}  >
            <AppBar  color="primary" position="static" >
          <Toolbar>
            <Box>Modify Search & Filters</Box>
          </Toolbar>
        </AppBar>
          </Box>
        
        
        <Box margin={2} >
          <Grid container spacing={4} justify="center" alignItems="center">
            {/* FIRST GRID */}
           
           <Grid container justify="center"  alignItems="center" item   spacing={2}>
         <Grid item xs sm={4}>
                <Card elevation={1} >
                  <Grid container item xs={4}  direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={6}>
                        <PlaceIcon color="primary" className={classes.icons}/>
                      
                    </Grid>
                    
                    <Grid  item container xs={6} direction="column" justify="flex-start" alignItems="center">
                      <Grid item xs={6}>
                      <Box width={190} ><Typography color="primary">From</Typography></Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box width={120} fontWeight="fontWeightBold">Abuja</Box>
                      </Grid>
                      
                    </Grid>
                    
                  </Grid>
          </Card>
        </Grid>
        <Grid item xs sm={4}>
                <Card>
                  <Grid container item xs={4}  direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={6}>
                       <PlaceIcon color="primary" className={classes.icons}/>
                      
                    </Grid>
                    
                    <Grid  item container xs={6} direction="column" justify="flex-start" alignItems="center">
                      <Grid item xs={6}>
                      <Box width={190} ><Typography color="primary">To</Typography></Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box fontWeight="fontWeightBold" width={120} >Abuja</Box>
                      </Grid>
                      
                    </Grid>
                    
                  </Grid>
          </Card>
        </Grid>
        <Grid item xs sm={4}>
                <Card>
                  <Grid container item xs={4}  direction="row" justify="flex-start" alignItems="center">
                    <Grid item xs={6}>
                       <DateRangeIcon color="primary" className={classes.icons}/>
                      
                    </Grid>
                    
                    <Grid  item container xs={6} direction="column" justify="flex-start" alignItems="center">
                      <Grid item xs={6}>
                      <Box width={190} ><Typography color="primary">Journey Date</Typography></Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box width={120} fontWeight="fontWeightBold">Nov 5, 1992</Box>
                      </Grid>
                      
                    </Grid>
                    
                  </Grid>
          </Card>
              </Grid>
              
        </Grid>

            {/* FIRST GRID END */}
        <Grid container justify="center"  alignItems="center" item   spacing={2}>
         <Grid item xs sm={6} md={3}>
                <Card>
                  <Grid container item xs={4}  direction="row" justify="flex-start" alignItems="center">
                    
                    <Grid  item container xs={6} direction="column" justify="flex-start" alignItems="center">
                      <Grid item xs={6}>
                      <Box width={190} ><Typography color="primary">Journey Class (Only)</Typography></Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box width={120} fontWeight="fontWeightBold">All Classes</Box>
                      </Grid>
                      
                    </Grid>
                    <Grid item xs={6}>
                      <Box className={classes.expandMore}>
                            <IconButton
                              onClick={handleMenu}
                              
                          aria-label="toggle password visibility"
                          edge="end">
                          <ArrowDropDownIcon  color="primary" fontSize="medium" />
                        </IconButton>
                        </Box>
                      
                    </Grid>
                    
                  </Grid>
          </Card>
        </Grid>
        <Grid item xs sm={6} md={3}>
                <Card >
                  <Grid container item xs={4} direction="row" justify="flex-start" alignItems="center">
                    
                    <Grid  item container xs={6} direction="column" justify="flex-start" alignItems="center">
                      <Grid item xs={6}>
                      <Box width={190} ><Typography color="primary">Quota</Typography></Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box width={120} fontWeight="fontWeightBold">General</Box>
                      </Grid>
                      
                    </Grid>
                    <Grid item xs={6}>
                      <Box className={classes.expandMore}>
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end">
                          <ArrowDropDownIcon  color="primary" fontSize="medium" />
                        </IconButton>
                        </Box>
                      
                    </Grid>
                    
                  </Grid>
          </Card>
        </Grid>
        <Grid item xs sm={6} md={3}>
                <Card >
                  <Grid container item xs={4} direction="row" justify="flex-start" alignItems="center">
                    
                    <Grid  item container xs={6} direction="column" justify="flex-start" alignItems="center">
                      <Grid item xs={6}>
                      <Box width={190} ><Typography color="primary">Departure</Typography></Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box width={120} fontWeight="fontWeightBold">All Time</Box>
                      </Grid>
                      
                    </Grid>
                    <Grid item xs={6}>
                      <Box className={classes.expandMore}>
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end">
                          <ArrowDropDownIcon  color="primary" fontSize="medium" />
                        </IconButton>
                        </Box>
                      
                    </Grid>
                    
                  </Grid>
          </Card>
              </Grid>
              <Grid item xs sm={6} md={3}>
                <Card >
                  <Grid container item xs={4} direction="row" justify="flex-start" alignItems="center">
                    
                    <Grid  item container xs={6} direction="column" justify="flex-start" alignItems="center">
                      <Grid item xs={6}>
                      <Box width={190} ><Typography color="primary">Arrival</Typography></Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box width={120} fontWeight="fontWeightBold">All Time</Box>
                      </Grid>
                      
                    </Grid>
                    <Grid item xs={6}>
                      <Box className={classes.expandMore}>
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end">
                          <ArrowDropDownIcon  color="primary" fontSize="medium" />
                        </IconButton>
                        </Box>
                      
                    </Grid>
                    
                  </Grid>
          </Card>
              </Grid>
              
        </Grid>
        <Grid container justify="center" alignItems="center" item  spacing={2}>
         <Grid item xs sm={3}>
                <Paper>
                  <Grid container item xs={4} direction="row" justify="flex-start" alignItems="center">
                    
                    <Grid  item container xs={6} direction="column" justify="flex-start" alignItems="center">
                      <Grid item xs={6}>
                      
                      </Grid>
                      <Grid item xs={6}>
                        
                      </Grid>
                      
                    </Grid>
                    <Grid item xs={6}>
                      
                      
                    </Grid>
                    
                  </Grid>
          </Paper>
        </Grid>
        <Grid item xs sm={3}>
                <Paper >
                  <Grid container item xs={4} direction="row" justify="flex-start" alignItems="center">
                    
                    <Grid  item container xs={6} direction="column" justify="flex-start" alignItems="center">
                      <Grid item xs={6}>
                      
                      </Grid>
                      <Grid item xs={6}>
                       
                      </Grid>
                      
                    </Grid>
                    <Grid item xs={6}>
                      
                      
                    </Grid>
                    
                  </Grid>
          </Paper>
        </Grid>
        <Grid item  xs sm={3}>
                <Paper >
                  <Grid container item xs={4} direction="row" justify="flex-start" alignItems="center">
                    
                    <Grid  item container xs={6} direction="column" justify="flex-start" alignItems="center">
                      <Grid item xs={6}>
                      
                      </Grid>
                      <Grid item xs={6}>
                        
                      </Grid>
                      
                    </Grid>
                    <Grid item xs={6}>
                      
                      
                    </Grid>
                    
                  </Grid>
          </Paper>
              </Grid>
              <Grid item xs sm={3}>
              
                  <Grid container item xs={4} direction="row" justify="flex-start" alignItems="center">
                    
                    <Grid  item container xs={6} direction="column" justify="flex-end" alignItems="center">
                      <Grid item xs>
                     
                      </Grid>
                      <Grid item xs>
                        
                      </Grid>
                      
                    </Grid>
                    <Grid item xs sm={6}>
                      <Box  component="div" width={150}>
                        <Button fullWidth color="secondary" variant="contained">Apply Now</Button>
                        </Box>
                      
                    </Grid>
                    
                  </Grid>
      
              </Grid>
              
        </Grid>
          </Grid>
          </Box>
          </Paper>
          </Box>
      <Box>
        <Box   >
            <AppBar  color="primary" position="static" >
            <Toolbar >
              <Box  className={classes.appBarItem}>
              <Grid container direction="row" justify="flex-start" alignItems="center" spacing={1}>
                <Grid item xs={3} >
                      <IconButton
                        color="inherit"
                          aria-label="toggle password visibility"
                        edge="end">
                        <NavigateBefore/>
                          </IconButton>
                </Grid>
                  
                    <Grid item xs={3} >
                      <DateRangeIcon color="white" style={{ fontSize: 30 }} />
                    </Grid>
                    <Grid item xs={3}><Box width={90}>Fri Nov, 2020</Box></Grid>
                    
                  <Grid item xs={3} ><Box ml={5} className={classes.nextBtn}>
                    <IconButton
                      color="inherit"
                          aria-label="toggle password visibility"
                          edge="end"><NavigateNext /></IconButton>
              </Box></Grid>
                </Grid>
                </Box>
          </Toolbar>
        </AppBar>
          </Box>
          
      </Box>
      <Box mt={2}>
      <Paper  elevation={0} variant="outlined"  >
        <Box  ml={1}><Grid container alignContent="center" justify="flex-start" spacing={2} >
          
            <Grid className={classes.heading} item xs={12} sm={2}><Box fontWeight="fontWeightBold">Train Name & No.</Box></Grid>
          <Grid item className={classes.heading} xs={12} sm={1} ><Box fontWeight="fontWeightBold"className={classes.headerDeparture}>Departure</Box></Grid>
        <Grid item xs={12} className={classes.heading} sm={1}><Box fontWeight="fontWeightBold"className={classes.headerArrival}>Arrival</Box></Grid>
        <Grid item xs={12} className={classes.heading} sm={1} ><Box fontWeight="fontWeightBold" className={classes.headerDuration}>Duration</Box></Grid>
        <Grid item xs={12} className={classes.heading} sm={2} ><Box fontWeight="fontWeightBold" className={classes.headerClasses}>Classes</Box></Grid>
        <Grid item xs={12} className={classes.heading} sm={2} ><Box  fontWeight="fontWeightBold" className={classes.headerAvailability}>Availability</Box></Grid>
        <Grid item xs={12} className={classes.heading} sm={1} ><Box  fontWeight="fontWeightBold" className={classes.headerFare}>Fare</Box></Grid>
        <Grid item xs={12} className={classes.heading} sm={1} ><Box  fontWeight="fontWeightBold"className={classes.headerAction}>Actions</Box></Grid>
        
          
        </Grid>
        </Box>
        
        
        </Paper>
        </Box>
      <Box className={classes.trainBookInfo}>
        <Paper elevation={0} variant="outlined" >
         <Box ml={1}><Grid container alignContent="center" spacing={1} justify="center" >
          
            <Grid item xs={12}  sm={2} >
              <Box mt={1} className={classes.tn}>
                <Box >Echo</Box>
              <Box >#54356</Box>
              </Box>
              
            </Grid>
            <Grid item xs={12} sm={1} >
              <Box mt={1} className={classes.departure}>
              <Box >7:00</Box>
                <Box >Abj</Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={1}>
              <Box mt={1} className={classes.arrival}>
              <Box >12:30</Box>
                <Box >Lag</Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={1} >
              <Box mt={1} className={classes.duration}>12.3Hrs</Box></Grid>
            <Grid item xs={12} sm={2} >
              
              <Box mt={1} className={classes.classes}>
              <ButtonGroup  fullWidth >
              <Button color="primary" variant="contained">AL</Button>
              <Button>AL</Button>
              <Button>AL</Button>
        </ButtonGroup></Box></Grid>
            <Grid item xs={12} sm={2} >
              <Box className={classes.availProb}  mt={1}>Avail-10</Box>
            </Grid>
        <Grid item xs={12} sm={1} ><Box className={classes.fare}  mt={1}>2,500</Box></Grid>
            <Grid item xs={12} sm={2} >
              <Box mt={1} className={classes.action}>
                <TrainPaymentDetails handleClickOpen={handleClickOpen} open={toggle} handleClose={handleClose}/>
              </Box>
              <Box color="primary"  className={classes.avail}><Button className={classes.btnAvail}>Next Availability</Button></Box>
            </Grid>
        </Grid>
          </Box>
          </Paper>
      </Box>
  
        {renderMenu}
      </Box>

  );
}

export default Train;