import React from 'react';
import {Provider, connect } from 'react-redux';
import {history} from '../../components/SimpleReactRouter';

import {Layout, Divider} from '@chanoch/chanoch-com-components';

import Recipe from './Recipe';

import config from '../../../config';

export class MenuPlannerPage extends React.Component {
    constructor(props) {
        super(props);
        this.createNewMenu = this.createNewMenu.bind(this);
        this.selectMenu = this.selectMenu.bind(this);
    }

    /**
     * TODO Externalise the navigation action handler
     * 
     * @param {event} e 
     */
    createNewMenu(e) {
        e.preventDefault();
        this.props.createMenu();
    }

    /**
     * TODO Externalise the navigation action handler
     * 
     * @param {event} e 
     */
    selectMenu(e) {
        e.preventDefault();
        this.props.selectMenu();
    }

    render() {
        const {menu, menus} = this.props;
        return (
            <Provider store={this.props.store}>
                <Layout title="Wiggers family menu planner." active={"Menu Planner"} config={config}>
                    <div className="col-12">
                        <h1 className="section__heading">Menu Planner</h1>
                        <button onClick={this.createNewMenu}>Create new menu</button>
                    </div>
                    {menu &&
                    <p><a onClick={this.selectMenu}>Select recipes for menu</a></p>
                    }
                    {menu && menu.selected && 
                        menu.selected.map((recipe) => {
                            return <Recipe recipeId={recipe.key} key={recipe.key} name={recipe.name}/>
                        })
                    }
                    {menus &&  
                        menus.map((menu) => {
                            return <Recipe recipeId={menu.title} key={menu.title} name={menu.title}/>
                        })
                    }
                </Layout>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu,
        menus: state.menus
    }
};

import {createNewMenu} from './redux/CreateNewMenu';
import {listRecipes} from './redux/ListRecipes';

const mapDispatchToProps = (dispatch) => ({
    createMenu: () => dispatch(createNewMenu()),
    selectMenu: () => dispatch(listRecipes()),
});

const ConnectedMenuPlannerPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(MenuPlannerPage);

export default ConnectedMenuPlannerPage;