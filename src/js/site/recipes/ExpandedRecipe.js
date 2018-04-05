import React, { Component } from 'react'

import './recipe.css';

class Recipe extends Component {
    render () {
        const {name} = this.props;
        return (
            <section className="section recipe">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="recipe_body">
                                {/* <div className="recipe_img">
                                    <img src="assets/img/blog_item_img.jpg" className="img-fluid" alt="..." />
                                </div> */}
                                <h3 className="recipe_title" data-hover={name}>{name}</h3>
                                {/* <ul className="recipe_info">
                                    <li><a href="#">24 Dec 2017</a></li>
                                    <li>/</li>
                                    <li><a href="#">Food</a></li>
                                    <li>/</li>
                                    <li><a href="#">by John Doe</a></li>
                                </ul>						 */}
        
                                {/* <p className="recipe_description">Lorem ipsum dolor sit amet</p>     */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Recipe