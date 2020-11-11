import React from 'react';
import PropTypes from 'prop-types';
 import {
  makeStyles, Fade, PlaceIcon, DateRangeIcon, Button,
  Paper, Card, Menu, MenuItem, NavigateNext, ButtonGroup,
  ArrowDropDownIcon, IconButton, Typography,
  Box, Grid, AppBar, Toolbar, NavigateBefore,
} from '../../mui';


const TrainInfo = () => {
    return (
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
                      <DateRangeIcon color="#fff" style={{ fontSize: 30 }} />
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
    );
}
 
TrainInfo.propTypes = {};
 
export default TrainInfo;