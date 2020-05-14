import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const styles = theme => ({});

class RecipeView extends React.Component {

    render() {
        const {recipe} = this.props;
        return (
            <>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <a href={recipe.recipeURL}>{recipe.recipeName}</a>
                    </Typography>
                    <List dense>
                        {(recipe.ingredientsList !== undefined)
                        && recipe.ingredientsList.map(item => <ListItem key={item.toString()}>{item}</ListItem>)}
                    </List>
                </CardContent>
            </>
        )
    }

}

export default withStyles(styles, {withTheme: true})(RecipeView);
