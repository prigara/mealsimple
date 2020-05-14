import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
    recipeForm: {
        display: 'grid',
        gridGap: '10px'
    },
    saveButton: {
        marginTop: '20px'
    }
});

class RecipeForm extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.saveRecipe = this.saveRecipe.bind(this);

        this.recipeName = React.createRef();
        this.recipeURL = React.createRef();
        this.ingredientsList = React.createRef();
    }

    saveRecipe() {
        let ingredientsListArray = (this.ingredientsList.current.value.length > 0) ?
            this.ingredientsList.current.value.split("\n") :
            []

        let recipe = {
            recipeName: this.recipeName.current.value,
            recipeURL: this.recipeURL.current.value,
            ingredientsList: ingredientsListArray
        };

        this.props.onAddingRecipe(recipe);
    }

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.recipeForm} noValidate autoComplete="off">
                <TextField id="recipe-name" label="Recipe name" inputRef={this.recipeName}/>
                <TextField id="recipe-link" label="Link to the recipe" inputRef={this.recipeURL}/>
                <TextField
                    id="ingredients-list"
                    label="List of ingredients"
                    placeholder="List of ingredients"
                    multiline
                    inputRef={this.ingredientsList}
                />
                <Button
                    variant="text"
                    color="primary"
                    size="small"
                    className={classes.saveButton}
                    onClick={this.saveRecipe}
                >
                    Save
                </Button>
            </form>
        )
    }
}

RecipeForm.propTypes = {
    onAddingRecipe: PropTypes.func
};

export default withStyles(styles, {withTheme: true})(RecipeForm);
