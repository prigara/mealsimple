import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {withStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({});

class RecipeView extends React.Component {

    deleteRecipe = () => {
        this.props.onDeletingRecipe(this.props.recipe)
    };

    render() {
        const {recipe} = this.props;
        return (
            <>
                <CardContent>
                    <CardHeader
                        title={<a href={recipe.recipeURL}>{recipe.recipeName}</a>}
                    />
                    <List dense>
                        {(recipe.ingredientsList !== undefined)
                        && recipe.ingredientsList.map(item => <ListItem key={item.toString()}>{item}</ListItem>)}
                    </List>
                    <CardActions>
                        <Button size="small" color="primary" onClick={this.deleteRecipe}>
                            Delete
                        </Button>
                    </CardActions>
                </CardContent>
            </>
        )
    }
}

RecipeView.propTypes = {
    handleRemoveRecipe: PropTypes.func,
    recipe: PropTypes.object
}

export default withStyles(styles, {withTheme: true})(RecipeView);
