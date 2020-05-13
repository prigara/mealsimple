import Slider from "@material-ui/core/Slider";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import PropTypes from 'prop-types';

const styles = theme => ({
    slider: {
        width: '300px'
    },
    sliderLabel: {
        marginBottom: '40px'
    }
});

export const marks = [
    {
        value: 1,
        label: '1 Day',
    },
    {
        value: 7,
        label: '7 Days',
    }
];

export function valuetext(value) {
    return `${value} Days`;

}

class DaySlider extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.props.onNumberOfDaysChange(value);
    }

    render() {
        const {numberOfDays, classes} = this.props;

        return (
            <>
                <Typography id="discrete-slider" className={classes.sliderLabel} gutterBottom>
                    Select number of days you want to plan dinners for
                </Typography>
                <Slider
                    className={classes.slider}
                    defaultValue={numberOfDays}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="on"
                    step={1}
                    marks={marks}
                    min={1}
                    max={7}
                    onChangeCommitted={this.handleChange}
                />
            </>
        );
    }
}

DaySlider.propTypes = {
    onChangeCommitted: PropTypes.func
};

export default withStyles(styles, {withTheme: true})(DaySlider);
