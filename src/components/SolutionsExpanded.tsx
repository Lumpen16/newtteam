import React from 'react';
import "./SolutionsExpanded.css"
import ProductCards from './ProductCards'

export default class SolutionsExpanded extends React.Component {

    render() {
        return (
            <div id="solutions" className="solutions_expanded">
                <h1 className="solutions_expanded_header">
                    Наши решения
                </h1>
                <ProductCards />
            </div>
        )
    }
}