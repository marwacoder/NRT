import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles, MoreIcon, MailIcon,
  NotificationsIcon, Menu, Divider,Timeline,
  MenuItem, Zoom, CssBaseline, Avater, ExitToApp,
  Badge, List, ListItem, ListItemIcon, HomeIcon,Person,
  ListItemText, Drawer, Hidden, KeyboardArrowUpIcon, Box,
  MenuIcon, AccountCircle, AppBar, Toolbar,BrightIcon,
  IconButton, Typography, Fab, useScrollTrigger, DarkIcon, Grid, Paper
} from '../mui';
import AuthContainer from '../Views/Auth/AuthContainer'
import ReportIcon from '../Views/Train/SVG/Report'
import TrainIcon from '../Layout/TrainIcon';
import data from '../helpers/fakeData';


const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#2D2C94',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: 'Muli-Bold'
  },
  navText: {
fontSize: 12
  },
  appBarLink: {
    marginLeft: theme.spacing(40),
  },
  darkBtn: {
    color: theme.palette.grey[900]
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#fff'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbar: theme.mixins.toolbar,
    content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  avatar: {
    height: 50,
    width: 50
  },
  header: {
  
    backgroundImage: require('../assets/header.jpeg')
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  authSection: {
    display: 'flex',
    float: 'right'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    
  },
  moreIcon: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      marginLeft: -120
    },
  }
}));

const Navbar = (props) => {
  const { handleThemeChange, darkState } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(null);
 const [toggle, setToggle] = React.useState(false);

  const handleClickOpen = () => {
    setToggle(true);
  };
  const handleClosse = () => {
    setToggle(false);
  };

  
  const [anchorElMenu, setAnchorElMenu] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const open = Boolean(anchorElMenu);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


  const { container, history } = props
  
  


const handleClick = (item, selectedIndex) => {
     
  history.push(item.link);
  setSelected(selectedIndex)

  }
  const handleClickMobile = (item, selectedIndex) => {
     
  history.push(item.link);
  handleDrawerToggle();
  setSelected(selectedIndex)

    }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleDrawerToggle = () => {
        setMobileOpen(mobileOpen=> !mobileOpen)
    }

  

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const mobileMenu =
    [{name: 'Dashboard', link: '/dashboard', icon: <HomeIcon/>},
      { name: 'Profile', link: '/profile', icon: <Person /> },
    { name: 'Activity', link: '/train', icon: <Timeline/>},
    { name: 'Report', link: '/reports', icon: <ReportIcon /> },
      { name: 'Sign Out', link: '/dashboard', icon: <ExitToApp /> },
    
    ]
  
  const menuId = 'primary-search-account-menu';
  const drawer = (
    <Paper elevation={0}>
    <Box >
      <Box my={2} pl={4} width={230} >
        
        <Box><Avater className={classes.avatar} /></Box>
        <Box mt={1} fontWeight="fontWeightBold" color="inherit">Usman Jibril</Box>
      </Box>
      
      <Divider color="inherit" />
      <Box>
        <List component="nav" >
                  {mobileMenu.map((item, index) => {
                    return <>
                      <Box pl={1} fontWeight="fontWeightBold">
                      <MenuItem key={item.name}  button onClick={() => handleClickMobile(item, index)} selected={selected === index} >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.name} />
                        </MenuItem>
                      </Box>
                      </>
                      
                  })}
                </List>
      </Box>
      <Divider color="inherit" />
      <Box my={2} ml={3} fontSize="24">
        <Grid container justify="flex-start" alignContent="center" spacing={3}>
          <Grid item><Box>Dark Mode</Box></Grid>
          <Grid item><Box>
            <IconButton
                onClick={handleThemeChange}
                  aria-label="toggle"
                  size="small"
              edge="start"
              color="inherit"
             
            >{darkState ? <DarkIcon /> : <BrightIcon />}</IconButton>
            </Box></Grid>
        </Grid>
          
            
        
      </Box>
      </Box>
      </Paper>
  );
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Paper elevation={0}>
    <div className={classes.grow}>
      <CssBaseline />
      <AppBar color="primary">
        <Toolbar>
          <Box className={classes.sectionMobile}>
            <IconButton
              onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
            </IconButton>
          </Box>
          
           <Typography  className={classes.title} variant="h6" noWrap>
              NRT
          </Typography>
          <TrainIcon/>
          
          
         
            <div className={classes.appBarLink}>
              
            <Hidden xsDown={true} implementation="css">
              
                <Box ml={-30}>
                <List component="nav" className={classes.navLinks}>
                  {data.modules.web.map((item, index) => {
                    return <>
                      <Box pl={2}>
                      <MenuItem key={item.name}  button display="inline" onClick={() => handleClick(item, index)} selected={selected === index}>
                        <ListItemText primary={item.name} />
                      </MenuItem>
                      </Box>
                      </>
                      
                  })}
                </List>
              </Box>
                 </Hidden>

            </div>
          
          <Box className={classes.grow} />
          <Box className={classes.sectionDesktop}>
            <IconButton
                onClick={handleThemeChange}
                  aria-label="toggle"
                  size="small"
              edge="start"
              color="inherit"
             
            >
             { darkState ?  <DarkIcon /> : <BrightIcon /> }
                </IconButton>
           
           
            <List >
              <MenuItem button onClick={handleClickOpen}>
                
                <ListItemText primary="SIGN IN" />
                
              </MenuItem>
              
              
            </List>
            {/* <Box mt={1} fontSize={26}>|</Box>
            <List>
              <ListItem button>
                
                <ListItemText primary="SIGN OUT" />
               
              </ListItem>
              
            </List> */}
            </Box>
            
          <div className={classes.moreIcon}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
        
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
<div className={classes.sectionMobile}>
        <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            
                            container={container}
                            variant="temporary"
                            anchor={'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                         {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                          
                        </Drawer>
                    </Hidden>
          </nav>
          
        </div>
     
      <AuthContainer handleClose={handleClosse} handleOpen={handleClickOpen} open={toggle}/>
      
      {renderMobileMenu}
      {renderMenu}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon style={{color: '#fff'}}/>
        </Fab>
      </ScrollTop>
      </div>
      </Paper>
  );
}

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;