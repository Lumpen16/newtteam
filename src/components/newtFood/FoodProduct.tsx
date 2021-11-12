import React from 'react';
import './FoodProduct.css'

export default class FoodProduct extends React.Component {
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        let element:HTMLElement = document.querySelector('.nav_callback_span') as HTMLElement;
        element.click()
    }
    render() {
        return (
            <div className="food-product">
                <img src="/iphone.png" alt="jopa" />
                <div className="food-product_description">
                    <h1>
                        Newt.food
                    </h1>
                    <p>
                        Хотите, чтобы клиенты самостоятельно делали предзаказ или<br/>бронировали столик? Наше решение поможет им в этом и<br/>сэкономит ваши ресурсы.
                    </p>
                    <button onClick={this.handleClick} className="food-product_button">Оставить заявку</button>
                </div>
            </div>
        )
    }
}