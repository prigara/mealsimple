import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import React from "react";
import RecipeForm from "../RecipeForm/RecipeForm";
import RecipeView from "../RecipeView/RecipeView";

const styles = theme => ({
    dayCard: {
        maxWidth: '400px'
    }
});

class DayCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
        this.handleNewRecipe = this.handleNewRecipe.bind(this);
        this.state = {
            addRecipeMode: false
        };
    }

    componentDidMount() {
        if (this.props.recipes && this.props.recipes.length > 0) {
            this.setState({recipes: this.props.recipes})
        }
    }

    handleAddButtonClick() {
        this.setState({addRecipeMode: true})
    }

    handleNewRecipe(recipe) {
        recipe.day = this.props.dayNumber;

        this.setState({
            addRecipeMode: false
        }, () => {
            this.props.onDaySave(recipe);
        });
    }

    render() {
        const {classes} = this.props;
        const isAddRecipeMode = this.state.addRecipeMode;
        return (
            <Card className={classes.dayCard} key={this.props.dayNumber}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Day {this.props.dayNumber + 1}
                    </Typography>
                    {isAddRecipeMode &&
                    <RecipeForm onAddingRecipe={this.handleNewRecipe}/>
                    }
                    {(!isAddRecipeMode && this.props.recipes.length > 0) &&
                    this.props.recipes.map((recipe) =>
                            <RecipeView key={recipe.recipeName + recipe.recipeURL}
                                        recipe={recipe} />
                        )}
                    {!isAddRecipeMode &&
                    <Button variant="outlined" color="primary" onClick={this.handleAddButtonClick}>
                        Add Recipe
                    </Button>
                    }
                </CardContent>
            </Card>
        )
    }
}

DayCard.propTypes = {
    dayNumber: PropTypes.number,
    onDaySave: PropTypes.func,
    recipes: PropTypes.array
};

export default withStyles(styles, {withTheme: true})(DayCard);
