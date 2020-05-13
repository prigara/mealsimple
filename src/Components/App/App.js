import Grid from "@material-ui/core/Grid";
import {withStyles} from '@material-ui/core/styles';
import React from 'react';
import Cards from "../Cards/Cards";
import DaySlider from "../DaySlider/DaySlider";
import Header from "../Header/Header";

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleNumberOfDaysChange = this.handleNumberOfDaysChange.bind(this);
        this.handlePlanSave = this.handlePlanSave.bind(this);
        this.restoredState = JSON.parse(localStorage.getItem(`mealsimple`))
        this.state = {
            numberOfDays:
                this.restoredState ?
                    this.restoredState.numberOfDays : 3,
            recipesByDays: []
        };
    }

    handleNumberOfDaysChange(days) {
        this.setState({
            numberOfDays: days
        }, () => {
            localStorage.setItem(`mealsimple`, JSON.stringify(this.state));
        });
    }

    handlePlanSave(dayPlan) {
        let newMealPlan = this.state.recipesByDays.concat(dayPlan);

        this.setState({
            recipesByDays: newMealPlan
        }, () => {
            localStorage.setItem(`mealsimple`, JSON.stringify(this.state));
        });
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Header/>
                        <DaySlider numberOfDays={this.state.numberOfDays}
                                   onNumberOfDaysChange={this.handleNumberOfDaysChange}/>
                        <Cards
                            numberOfDays={this.state.numberOfDays}
                            onPlanSave={this.handlePlanSave}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(App);

