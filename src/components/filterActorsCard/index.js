import React from "react";  // useState/useEffect redundant 
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 845,
    backgroundColor: "rgb(210, 180, 140)",
    // maxHeight:600,
    maxWidth: 345,
  },
 
  media: { height: 300 },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterActorsCard(props) {
  const classes = useStyles();



  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  return (
    <Card   className={classes.root} variant="outlined"
    component="form"
    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
       <CardContent>
      <IconButton sx={{ p: '10px' }} aria-label="menu">
      <SearchIcon />
      </IconButton>
       <TextField
          className={classes.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={handleTextChange}
        />
      <IconButton  sx={{ p: '10px' }} aria-label="search" onChange={handleTextChange}>
      </IconButton>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={img}
        title="Filter"
      />
    <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="medium" />
          Find your favourite Actors.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}