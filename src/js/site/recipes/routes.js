/**
 * TODO do we need to rework this router to support menu ids?
 */
import ChooseRecipes from './ChooseRecipesPage';
import MenuPlanner from './MenuPlannerPage';
import React from 'react';

const routes = [
    { path: '/menuplanner/', action: (store) => <MenuPlanner store={store} /> },
    { path: '/menuplanner/selectmenu.html', action: (store) => <ChooseRecipes  store={store}/> },
];

export default routes;
