/**
 * TODO what happens if there isn't a recipe set up?
 * Use restful urls to make sure there is
 */

import React from 'react';
import {Provider, connect} from 'react-redux';

import { Layout, Divider } from "@chanoch/chanoch-com-components";

import Recipe from './Recipe';

import config from '../../../config';

class RecipesPage extends React.Component {
    render() {
        const {selected, recipes, select, deselect} = this.props;
        return (
            <Provider store={this.props.store}>
                <Layout title="Wiggers family menu planner." active={"Menu Planner"} config={config}>
                    <div className="col-12">
                        <h1 className="section__heading">Selected</h1>
                        {selected.map((recipe) => {
                            return <Recipe recipeId={recipe.key} key={recipe.key} name={recipe.name} onClick={deselect} />
                        })}
                        <Divider />
                        <h1 className="section__heading">Recipes</h1>
                        {recipes && recipes.map((recipe) => {
                            return <Recipe recipeId={recipe.key} key={recipe.key} name={recipe.name} onClick={select} />
                        })}
                    </div>
                </Layout>
            </Provider>
        )
    }
}

import {selectRecipe} from './redux/SelectRecipe';
import {deselectRecipe} from './redux/DeselectRecipe';

const mapStateToProps = (state) => {
    const selected = state.menu.selected;
    const recipes = state.recipes;
    return {
        selected,
        recipes
    }
};

const mapDispatchToProps = (dispatch) => ({
    select: (id) => dispatch(selectRecipe(id)),
    deselect: (id) => dispatch(deselectRecipe(id))
});

const ChooseRecipesPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(RecipesPage);

export default ChooseRecipesPage;
