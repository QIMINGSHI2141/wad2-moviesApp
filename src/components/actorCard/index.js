import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import StarsIcon from '@material-ui/icons/EmojiEmotions';
// import TrendingUpIcon from '@material-ui/icons/TrendingUp';
// import HouseIcon from "@material-ui/icons/TurnedInNot";
// import IconButton from "@material-ui/core/IconButton";
// import Grid from "@material-ui/core/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
// import Avatar from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
// import { ActorsContext } from "../../contexts/actorsContext";
// import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const useStyles = makeStyles({
    card: { maxWidth: 345 },
    media: { height: 500 },
    avatar: {
        backgroundColor: "rgb(152, 251, 152)",
    },
});

export default function ActorCard({ actor, action }) {
    const classes = useStyles();
    const { liked } = useContext(MoviesContext);
    //   const { playlist } = useContext(MoviesContext);

    if (liked.find((id) => id === actor.id)) {
        actor.liked = true;
    } else {
        actor.liked = false
    }

    //   if (playlist.find((id) => id === actor.id)) {
    //     actor.playlist = true;
    //   } else {
    //     actor.playlist = false
    //   }



    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                // avatar={
                //     actor.liked ? (
                //         <Avatar className={classes.avatar}>
                //             <StarsIcon size="large"/>
                //         </Avatar>
                //     ) : null

                // }
                // avatar={
                //   movie.playlist? (
                //     <Avatar className={classes.avatar}>
                //       <PlaylistAddIcon />
                //     </Avatar>
                //   ) : null
                // }
                title={
                    <Typography variant="h5" component="p">
                        {actor.name}{" "}
                    </Typography>
                }
            />
            <CardMedia
                className={classes.media}
                image={
                    actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : img
                }
            />
           
            <CardActions >
                {action(actor)}
                <Link to={`/actors/${actor.id}`}>
                    <Button variant="outlined" size="medium" color="primary">
                        More Info ...
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
}