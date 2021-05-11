import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '30px'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Typography variant="h2" component="h2" className={classes.root}>
            mealsimple – JetBrains hackathon 2020
        </Typography>
    );
};

export default Header;
