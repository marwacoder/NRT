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
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Box,Avater, Paper, EditIcon} from '../../mui'
const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
    borderColor: 'red'
    },
    profilePic: {
        width: 100,
        height: 100
    }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
            </Paper>
            </Box>
  );
}