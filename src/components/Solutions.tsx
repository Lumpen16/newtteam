import React from 'react';
import './Solutions.css'

export default class Solutions extends React.Component {
    render() {
        return (
            <div className="solutions">
                <div className={"solutions_container"}>
                <h1 className="solutions_header">
                    Наши решения для вас, если вы:
                </h1>
                <ul className="solutions_list">
                    <li>Владелец бизнеса услуг или торговли</li>
                    <li>Думаете о комфорте клиентов</li>
                    <li>Хотите автоматизировать поступление заказов и продаж</li>
                    <li>Ищете способ рационального использования ресурсов</li>
                </ul>
                </div>
            </div>
        )
    }
}