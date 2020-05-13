import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
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
    }

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.recipeForm} noValidate autoComplete="off">
                <TextField id="recipe-name" label="Recipe name"/>
                <TextField id="recipe-link" label="Link to the recipe"/>
                <TextField
                    id="ingredients-list"
                    label="List of ingredients"
                    placeholder="List of ingredients"
                    multiline
                />
                <Button
                    variant="text"
                    color="primary"
                    size="small"
                    className={classes.saveButton}
                >
                    Save
                </Button>
            </form>
        )
    }
}

export default withStyles(styles, {withTheme: true})(RecipeForm);
