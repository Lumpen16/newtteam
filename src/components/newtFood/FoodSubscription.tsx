import React from 'react';
import './FoodSubscription.css'


export default class FoodSubscription extends React.Component {
    render() {
        return (
            <div className={"food-sub"}>
                <img src="/iphone.png" alt="(((" />
                <div className={"food-sub_description"}>
                    <h1 className={"food-sub_description_header"}>
                        Подписка на новые<br/>  бизнес-возможности
                    </h1>
                    <ul className={"food-sub_description_list"}>
                        {/**/}
                        <li>Newt.food работает по подписке. Так наша команда постоянно<br/>поддерживает работу решения.</li>
                        <li>Вы платите один раз за установку продукта. Подписка запускает<br/>исправную работу приложения и помогает бизнесу процветать.</li>

                        <li>Цена подписки зависит от типа продукта: приложение, веб-сайт<br/>или бот, и от выбранных опций</li>
                        <li>Вы можете отменить подписку в любой момент, а в будущем<br/>вернуться к работе с Newt.food</li>
                    </ul>
                </div>
            </div>
        )
    }
}