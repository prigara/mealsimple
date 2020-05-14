import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const styles = theme => ({});

class RecipeView extends React.Component {

    render() {
        const {recipe} = this.props;
        // TODO: Fix key
        return (
            <>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <a href={recipe.recipeURL}>{recipe.recipeName}</a>
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {(recipe.ingredientsList !== undefined)
                        && recipe.ingredientsList.map(item => <li key={item.toString()}>{item}</li>)}
                    </Typography>
                </CardContent>
            </>
        )
    }

}

export default withStyles(styles, {withTheme: true})(RecipeView);
