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

    handleDay(day, recipesByDay) {
        let dayPlan = {
            [day]: recipesByDay
        }
        this.props.onPlanSave(dayPlan)
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.dayCards}>
                {[...Array(this.props.numberOfDays)].map((e, i) =>
                    <DayCard
                        key={i}
                        dayNumber={i + 1}
                        onDaySave={this.handleDay}/>
                    )}
            </div>
        );
    }
}

Cards.propTypes = {
    numberOfDays: PropTypes.number,
    onPlanSave: PropTypes.func
};

export default withStyles(styles, {withTheme: true})(Cards);
