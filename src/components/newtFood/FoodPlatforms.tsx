import React from 'react';
import './FoodPlatforms.css'

export default class FoodPlatforms extends React.Component {
    render() {
        return (
            <div className="food-platforms">
                <div className="food-platforms_wrapper">
                    <div className="food-platforms_wrapper_header">
                        Мы дружим со всеми
                    </div>
                    <ul className="food-platforms_wrapper_list">
                        <div>
                            <li>Android или iOS?</li>
                            <p>Мы не будем спорить что лучше, а с радостью разработаем приложения под необходимые операционные системы.</p>
                        </div>
                        <div>
                            <li>В виде сайта?</li>
                            <p>Без проблем! Newt.food - гибкое решение, которое может быть выполнено в виде адаптивного сайта. </p>
                        </div>
                        <div>
                            <li>Telegram-бот?</li>
                            <p>И такое возможно! Решение в виде Telegram-бота быстро и безошибочно выполняет свои задачи.</p>
                        </div>
                        <div>
                            <li>Эквайринг?</li>
                            <p>Мы работаем с продуктами банков, поэтому оплата заказов становится автоматизированной.</p>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}