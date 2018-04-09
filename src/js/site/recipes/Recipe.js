import React, { Component } from 'react'

import './recipe.css';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this);
    }

    clicked(e) {
        e.preventDefault();
        this.props.onClick(this.props.recipeId);
    }

    render () {
        const {name} = this.props;
        return (
            <section className="section recipe">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="recipe_body">
                                <h3 className="recipe_title" data-hover={name} onClick={this.clicked}>{name}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Recipe