import React from 'react';
import {Provider, connect } from 'react-redux';
import {history} from '../../components/SimpleReactRouter';

import {Layout, Divider} from '@chanoch/chanoch-com-components';

import Menu from './Menu';

import config from '../../../config';

export class MenuPlannerPage extends React.Component {
    constructor(props) {
        super(props);
        this.createNewMenu = this.createNewMenu.bind(this);
        this.selectMenu = this.selectMenu.bind(this);
        this.archiveMenu = this.archiveMenu.bind(this);
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
    selectMenu(key) {
        this.props.selectMenu(key);
    }

    /**
     * TODO Externalise the navigation action handler
     * 
     * @param {event} e 
     */
    archiveMenu(key) {
        this.props.archiveMenu(key);
    }

    render() {
        const {menus} = this.props;
        return (
            <Provider store={this.props.store}>
                <Layout title="Wiggers family menu planner." active={"Menu Planner"} config={config}>
                    <div className="col-12">
                        <h1 className="section__heading">Menu Planner</h1>
                        <p onClick={this.createNewMenu}>Create new menu</p>
                    </div>
                    <div className="col-12">
                        <h1 className="section__heading">Menus</h1>
                        {menus && menus.map &&
                            menus.map((menu) => {
                                return <Menu key={menu.key} menu={menu} archiveMenu={this.archiveMenu}/>
                            })
                        }
                    </div>
                </Layout>
            </Provider>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menus
    }
};

import {createNewMenu} from './redux/CreateNewMenu';
import {selectMenu} from './redux/SelectMenu';
import {archiveMenu} from './redux/ArchiveMenu';

const mapDispatchToProps = (dispatch) => ({
    createMenu: () => dispatch(createNewMenu()),
    selectMenu: () => dispatch(selectMenu()),
    archiveMenu: (key) => dispatch(archiveMenu(key)),
});

const ConnectedMenuPlannerPage = 
        connect(
            mapStateToProps, 
            mapDispatchToProps
        )(MenuPlannerPage);

export default ConnectedMenuPlannerPage;