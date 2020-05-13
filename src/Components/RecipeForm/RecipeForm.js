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
        this.recipeIngredients = React.createRef();
    }

    saveRecipe(e) {
        e.preventDefault();
        let state = {
            recipeName: this.recipeName.current.value,
            recipeURL: this.recipeURL.current.value,
            ingredientsList: this.recipeIngredients.current.value
        };

        localStorage.setItem(`plannedDay${this.props.currentDayNumber}`, JSON.stringify(state));
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
                    inputRef={this.recipeIngredients}
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
    currentDayNumber: PropTypes.number
};

export default withStyles(styles, {withTheme: true})(RecipeForm);
