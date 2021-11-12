import React from 'react';
import {Link} from 'react-router-dom'

export default class FoodCard extends React.Component<{name: string, classy: string}, {}> {
    constructor(props: any) {
        super(props)
        this.scrollUp = this.scrollUp.bind(this);
    }
    scrollUp() {
        window.scrollTo(0, 0)
    }


    render() {
        return (
            <>
                <div className={this.props.classy + " " + this.props.name}>
                    <h1 className="product_cards_first_header">
                        Newt.food
                    </h1>
                    <p className="product_cards_first_description">
                        Наше встраиваемое решение для ресторанного бизнеса
                    </p>
                    <ul className="product_cards_first_list">
                        <li>Предзаказ еды из заведения</li>
                        <li>Клиент сам забирает заказ</li>
                        <li>Делаем  под различные платформы</li>
                    </ul>
                    <p className="product_cards_first_more">

                        <span onClick={this.scrollUp}><Link to="/newtFood">Подробнее</Link></span><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.56636 9.53844L0.956055 2.73984L2.61806 0.884766L11.0438 9.55053L2.60705 18.1156L0.956316 16.249L7.56636 9.53844Z" fill="#5A97E5"/>

                    </svg>
                    </p>
                    <img src="/iphone.png" alt="((("/>
                </div>
            </>
        )
    }
}