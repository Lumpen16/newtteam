import React, {useState} from 'react';

export default function ClientCard(props: any) {
    return (
        <>
            <div>
                <div className={props.classy}>
                    <h1 className="food-pieces_client_header">
                        Сторона пользователя
                    </h1>
                    <p className="food-pieces_client_description">
                        Просмотр меню и предложений, заказ еды или бронирование столиков, оплата - все удобства через один интерфейс.
                    </p>
                    <ul className="food-pieces_client_list">
                        <li>Экономит время клиента</li>
                        <li>Обработка заказа за секунды</li>
                        <li>Терминал в кармане</li>
                        <li>Подстараивается под вкус клиента</li>
                        <li className={"last-li"}>Клиент точно знает, когда заказ будет готов</li>
                    </ul>


                </div>
            </div>
        </>
    )

}