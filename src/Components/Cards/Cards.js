import {withStyles} from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import React from "react";
import DayCard from "../DayCard/DayCard";

const styles = theme => ({
    dayCards: {
        display: 'grid',
        gridGap: '10px',
        gridTemplateColumns: 'repeat(3, 1fr)'
    },
    dayCard: {
        maxWidth: '400px'
    }
});

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.handleDay = this.handleDay.bind(this);
    }

    handleDay(recipe) {
        this.props.onPlanSave(recipe)
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.dayCards}>
                {[...Array(this.props.numberOfDays)].map((e, i) =>
                    <DayCard
                        key={i}
                        dayNumber={i}
                        recipes={this.props.recipesByDays.filter(el => el.day === i)}
                        onDaySave={this.handleDay}/>
                    )}
            </div>
        );
    }
}

Cards.propTypes = {
    numberOfDays: PropTypes.number,
    onPlanSave: PropTypes.func,
    recipesByDays: PropTypes.array
};

export default withStyles(styles, {withTheme: true})(Cards);
