import React from 'react';
import './FoodPieces.css'
import FoodCards from './FoodCards'

export default class FoodPieces extends React.Component {
    render() {
        return (
            <div className="food-pieces">
                <h1 className="food-pieces_header">
                    Из чего состоит продукт?
                </h1>
                <FoodCards/>
            </div>
        )
    }
}