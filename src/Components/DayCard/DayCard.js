import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import React from "react";
import RecipeForm from "../RecipeForm/RecipeForm";

const styles = theme => ({
    dayCard: {
        maxWidth: '400px'
    }
});

class DayCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.state = {addRecipeMode: false}
    }

    handleAddButtonClick() {
        this.setState({addRecipeMode: true})
    }

    render() {
        const {classes} = this.props;
        const isAddRecipeMode = this.state.addRecipeMode;

        return (
            <Card className={classes.dayCard}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Day {this.props.dayNumber}
                    </Typography>
                    {!isAddRecipeMode &&
                        <Button variant="outlined" color="primary" onClick={this.handleAddButtonClick}>
                            Add Recipe
                        </Button>
                    }
                    {isAddRecipeMode &&
                        <RecipeForm classes={classes}/>
                    }
                </CardContent>
            </Card>
        )
    }
}

DayCard.propTypes = {
    dayNumber: PropTypes.number
};

export default withStyles(styles, {withTheme: true})(DayCard);
