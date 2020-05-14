import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {withStyles} from '@material-ui/core/styles';
import DeleteIcon from "@material-ui/icons/Delete";
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
    },
    clearButton: {
        margin: theme.spacing(2),
    },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleNumberOfDaysChange = this.handleNumberOfDaysChange.bind(this);
        this.handlePlanUpdate = this.handlePlanUpdate.bind(this);
        this.clearMealPlan = this.clearMealPlan.bind(this);
        this.restoredState = JSON.parse(localStorage.getItem(`mealsimple`))
        this.state = {
            numberOfDays:
                this.restoredState ?
                    this.restoredState.numberOfDays : 3,
            recipesByDays: this.restoredState ?
                this.restoredState.recipesByDays : []
        };
    }

    handleNumberOfDaysChange(days) {
        this.setState({
            numberOfDays: days
        }, () => {
            localStorage.setItem(`mealsimple`, JSON.stringify(this.state));
        });
    }

    handlePlanUpdate(recipe, action) {
        let newMealPlan = this.state.recipesByDays;
        if (action === 'add') {
            newMealPlan.concat(recipe);
        }
        if (action === 'delete') {
            newMealPlan = newMealPlan.filter(el => !(el.day === recipe.day && el.recipeURL === recipe.recipeURL))
        }

        this.setState({
            recipesByDays: newMealPlan
        }, () => {
            localStorage.setItem(`mealsimple`, JSON.stringify(this.state));
        });
    }

    clearMealPlan() {
        this.setState({
            numberOfDays: 2,
            recipesByDays: []
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
                            onPlanUpdate={this.handlePlanUpdate}
                            recipesByDays={this.state.recipesByDays}/>

                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.clearButton}
                            startIcon={<DeleteIcon/>}
                            onClick={this.clearMealPlan}>
                            Clear Meal Plan
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(App);

