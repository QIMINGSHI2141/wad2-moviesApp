import React from 'react';
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BookIcon from "@material-ui/icons/Book";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import FaceRetouchingNaturalRoundedIcon from '@material-ui/icons/FaceRounded';
import BusinessIcon from '@material-ui/icons/Business';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import AccessibilityNewRoundedIcon from '@material-ui/icons/AccessibilityNewRounded';
import SentimentVerySatisfiedRoundedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
  
});

export function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
         <ListItem>
           <ListItemIcon><FavoriteBorderIcon/> </ListItemIcon>
           <Link to="/movies/favorites">Favorite Movies</Link>
           <ListItemText/>
         </ListItem>
         <ListItem>
           <ListItemIcon><BookmarksIcon/> </ListItemIcon>
           <Link to="/movies/mustwatch">Mustwatch</Link>
           <ListItemText />
         </ListItem>
         </List>
         <Divider/>
         <List>
         <ListItem>
           <ListItemIcon><AccessAlarmsIcon/> </ListItemIcon>
           <Link to="/movies/upcoming">Upcoming Movies</Link>
           <ListItemText />
         </ListItem>
         <ListItem>
           <ListItemIcon><AccessibilityNewRoundedIcon/> </ListItemIcon>
           <Link to="/movies/popular">Popular Movies</Link>
           <ListItemText />
         </ListItem>
         <ListItem>
           <ListItemIcon><BookIcon/> </ListItemIcon>
           <Link to="/movies/toprated">Top-rated Movies</Link>
           <ListItemText />
         </ListItem>
         <ListItem>
           <ListItemIcon><SentimentVerySatisfiedRoundedIcon/> </ListItemIcon>
           <Link to="/movies/nowplaying">Nowplaying Movies</Link>
           <ListItemText />
         </ListItem>
      </List>
     
      <Divider/>
      <List>
         <ListItem>
           <ListItemIcon><FaceRetouchingNaturalRoundedIcon/></ListItemIcon>
           <Link to="/actors">Popular Actors</Link>
           <ListItemText />
         </ListItem>
      </List>
      <Divider/>
      <List>
         <ListItem>
           <ListItemIcon><BusinessIcon/></ListItemIcon>
           <Link to="/movies/company">Company Search</Link>
           <ListItemText />
         </ListItem>
         <ListItem>
           <ListItemIcon><LiveTvIcon/></ListItemIcon>
           <Link to="/movies/tv">TV Search</Link>
           <ListItemText />
         </ListItem>
      </List>
      <Divider/>
    </div>
  );

  return (
    <div>
        <IconButton><MenuOpenIcon/>
        <nav className={classes.title}></nav>
      {(["More"]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      </IconButton>
    </div>
  );
}

export default withRouter(TemporaryDrawer);