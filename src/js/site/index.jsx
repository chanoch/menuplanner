/**
 * TODO document separate spa for recipes
 */

import ReactDOM from 'react-dom';
import history from '../components/History';
import router from '../components/Router';
import routes from './recipes/routes';

import {createStore, applyMiddleware} from 'redux';

import {SelectRecipeMiddleware} from './recipes/redux/SelectRecipe';
import {DeselectRecipeMiddleware} from './recipes/redux/DeselectRecipe';
import {ListRecipesMiddleware} from './recipes/redux/ListRecipes';
import {ListMenusMiddleware, receiveMenus} from './recipes/redux/ListMenus';
import { CreateMenuMiddleware } from './recipes/redux/CreateNewMenu';

import {rootReducer} from './recipes/RootReducer';

const store = createStore(rootReducer, {recipes: [], selected: [], menus: []}, applyMiddleware(
    SelectRecipeMiddleware(),
    DeselectRecipeMiddleware(),
    ListMenusMiddleware(),
    ListRecipesMiddleware(),
    CreateMenuMiddleware()
)); 

import {fetchMenus} from './recipes/service/menus';
fetchMenus(menus => store.dispatch(receiveMenus(menus)));

function renderComponent(component) {
    ReactDOM.render(component, document.getElementById('root'));
}

function render(location) {
    router.resolve(routes, location, store)
    .then(renderComponent)
    .catch(error =>
        router.resolve(routes, {location, error})
              .then(renderComponent));
}

render(history.location);
history.listen(render);