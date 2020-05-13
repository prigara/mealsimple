import {makeStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import React from "react";
import DayCard from "../DayCard/DayCard";

const useStyles = makeStyles((theme) => ({
    dayCards: {
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    dayCard: {
        maxWidth: '400px'
    }
}));

const Cards = props => {
    const classes = useStyles();

    return (
        <div className={classes.dayCards}>
            {[...Array(props.numberOfDays)].map((e, i) =>
                <DayCard key={i} dayNumber={i + 1}/>)}
        </div>
    );
};

Cards.propTypes = {
    numberOfDays: PropTypes.number
};

export default Cards;
