import routes from './recipes/routes';

/**
 * Add the react middlware which will act on events
 */
import {SelectRecipeMiddleware} from './recipes/redux/SelectRecipe';
import {DeselectRecipeMiddleware} from './recipes/redux/DeselectRecipe';
import {ListRecipesMiddleware} from './recipes/redux/ListRecipes';
import {ListMenusMiddleware, receiveMenus} from './recipes/redux/ListMenus';
import { CreateMenuMiddleware } from './recipes/redux/CreateNewMenu';

import {rootReducer} from './recipes/RootReducer';

import {SimpleReactRouter} from '../components/SimpleReactRouter';

const initialState = {
    recipes: [], // the list of recipes we use
    selected: [], // the selected recipes for the current menu
    menus: [] // list of historical meal plans or menus
};

const middleware = [
    SelectRecipeMiddleware(),
    DeselectRecipeMiddleware(),
    ListMenusMiddleware(),
    ListRecipesMiddleware(),
    CreateMenuMiddleware()
]

/**
 * Create store with the redux middleware components which will carry out
 * any mutations required as part of the various actions. 
 */
const router = new SimpleReactRouter(
    rootReducer, 
    initialState, 
    middleware,
    routes); 

/**
 * Fetch the list of historical menus (or meal plans)
 */
import {fetchMenus} from './recipes/service/menus';
fetchMenus(menus => router.dispatch(receiveMenus(menus)));
