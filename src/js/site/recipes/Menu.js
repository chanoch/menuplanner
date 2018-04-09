import React, { Component } from 'react'

import './menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this);
        this.archiveMenu = this.archiveMenu.bind(this);
    }

    clicked(e) {
        e.preventDefault();
        this.props.onClick(this.props.menu.key);
    }

    archiveMenu(e) {
        e.preventDefault();
        this.props.archiveMenu(this.props.menu.key);
    }

    render () {
        const {menu} = this.props;
        return (
            <section className="section menu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu_body">
                                <h5 className="menu_title" data-hover={menu.title} ><span onClick={this.clicked}>MEAL PLAN: {menu.title}</span> <span className="right" onClick={this.archiveMenu}>Archive</span></h5>
                                <ul>
                                {menu.meals && 
                                    menu.meals.map(meal => {
                                        return <li key={meal.meal_id}>{meal.name}</li>
                                    })
                                }
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Menu;