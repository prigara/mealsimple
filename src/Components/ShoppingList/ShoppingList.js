import GridList from "@material-ui/core/GridList";
import ListItem from "@material-ui/core/ListItem";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

const styles = theme => ({
    title: {
        marginTop: "30px",
        marginBottom: "30px"
    },
    listContainer: {
        padding: '20px'
    },
    note: {
        color: theme.palette.text.secondary,
    }
});

class ShoppingList extends React.Component {

    render() {
        const {shoppingItems, classes} = this.props;

        return (
            <>
                <Typography variant="h4" component="h4" className={classes.title}>
                    Shopping List
                </Typography>
                <Paper className={classes.listContainer}>
                    {shoppingItems.length === 0 ?
                        <Typography component="p" variant={"body1"} className={classes.note}>Start adding recipes to make a shopping list</Typography>
                        : <GridList cols={3} spacing={10} component={"ul"} cellHeight={"auto"}>
                            {shoppingItems.map((e, i) =>
                                <ListItem disableGutters key={i}>{e}</ListItem>
                            )}
                        </GridList>}
                </Paper>
            </>
        )
    }
}

ShoppingList.propTypes = {
    shoppingItems: PropTypes.array,
};

export default withStyles(styles, {withTheme: true})(ShoppingList);
