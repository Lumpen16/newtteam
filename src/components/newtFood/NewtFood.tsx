import React from 'react';
import FoodProduct from './FoodProduct'
import FoodPlatforms from './FoodPlatforms'
import FoodPieces from './FoodPieces'
import FoodSubscription from './FoodSubscription'
import FoodVars from './FoodVars'
import FoodAddons from './FoodAddons'
import FoodCall from './FoodCall'

export default class NewtFood extends React.Component{
    render() {
        return (
            <div>
                <FoodProduct />
                <FoodPlatforms />
                <FoodPieces />
                <FoodSubscription />
                <FoodVars />
                <FoodAddons />
                <FoodCall />
            </div>
        )
    }
}