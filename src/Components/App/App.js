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
        this.state = {
            numberOfDays:
                parseInt(localStorage.getItem(`mealPlannedDays`)) ?
                    parseInt(localStorage.getItem(`mealPlannedDays`)) : 3
        };
    }

    handleNumberOfDaysChange(days) {
        this.setState({numberOfDays: days})
        localStorage.setItem(`mealPlannedDays`, days);
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
                        <Cards numberOfDays={this.state.numberOfDays}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(App);

