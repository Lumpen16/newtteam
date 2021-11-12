import React from 'react';
import './FoodVars.css'
import SlidingFood from './SlidingFood'

export default class FoodVars extends React.Component {
    render() {
        return (
            <div className="food-vars">
                <h1 className="food-vars_header">
                    То, что подойдет вашему бизнесу
                </h1>
                <SlidingFood />
            </div>
        )
    }
}