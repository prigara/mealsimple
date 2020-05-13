import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import PropTypes from 'prop-types';

const styles = theme => ({
    dayCard: {
        maxWidth: '400px'
    }
});

class DayCard extends React.Component {
    render() {
        const {classes} = this.props;

        return (
            <Card className={classes.dayCard}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Day {this.props.dayNumber}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Recipe
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

DayCard.propTypes = {
    dayNumber: PropTypes.number
};

export default withStyles(styles, {withTheme: true})(DayCard);
