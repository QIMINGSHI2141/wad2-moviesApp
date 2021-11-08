import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
//import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
const AddToMustwatchIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustwatch = (e) => {
    e.preventDefault();
    context.addToMustwatch(movie);
  };
  return (
    <IconButton aria-label="add to mustwatch" onClick={handleAddToMustwatch}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustwatchIcon;