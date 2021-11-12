import React from 'react';
import './FoodAddons.css'
import AddonItem from './AddonItem'

const sorting_z = [<span>Сортировка заказов</span>,
    <span>Гора заказов - это тяжело. Сортировка распределяет заказы по срочности, позициям
и помогает сотрудникам не нервничать.</span>,
    <span>Опция представляет собой отдельный интерфейс для поваров. Сотрудники грамотно распределяют силы и ресурсы заведения.</span>,
    <span>Функция сортировки заказов</span>,
    <span>+ 399 ₽/мес</span>
]


const stats = [
    <span>Сбор статистики</span>,
    <span>Статистика улучшает показатели бизнеса.
Вы получаете сводки по заказам, данные аналитики и отслеживаете рост заведения!</span>,
    <span>Выберите сторону администратора или владельца - функция встроится в интерфейс для одной из этих сторон.</span>,
    <span>Функиция сбора статистики</span>,
    <span>+ 199 ₽/мес</span>
]

const ras = [
    <span>Рассылка для клиентов</span>,
    <span>Уведомляйте посетителей о специальных предложениях и акциях при помощи рассылки.</span>,
    <span>Настраивайте рассылку и присылайте уведомления пользователям нашего решения.</span>,
    <span>Функция рассылки для клиентов</span>,
    <span>+ 199 ₽/мес</span>
]

const otz = [
    <span>Отслеживание отзывов</span>,
    <span>Получайте уведомления об отзывах, оставленных на списке платформ
и предлагайте посетителям бонусы!</span>,
    <span>Следите за отзывами о заведении при помощи новой функции! Улучшите рейтинг заведения при помощи специальных акций.</span>,
    <span>Функция отслеживания отзывов</span>,
    <span>+ 299 ₽/мес</span>
]

export default class FoodAddons extends React.Component<{},{}> {
    constructor(props: any) {
        super(props);

    }
    render() {
        return (
            <div className="food-addons">
                <h1 className="food-addons_header">Секретные ингредиенты</h1>
                <ul className={"food-addons_header_list"}>
                    <li className={"food-addons_li-first"}>Хотите покорять новые вершины, увеличивать<br/>рейтинг заведения и чувствовать себя комфортно?<br/>Добавьте “секретные ингредиенты” в решение!</li>
                    <li>Как мы и говорили, Newt.food - гибкое решение.<br/>Добавьте функции, которые подходят именно под<br/>ваш формат.</li>
                </ul>

                <div className={"food-addons_content_list"}>
                    <div>
                        <AddonItem content={sorting_z}/>
                    </div>
                    <div>
                        <AddonItem content={stats}/>
                    </div>
                    <div>
                        <AddonItem content={ras}/>
                    </div>
                    <div>
                        <AddonItem content={otz}/>
                    </div>

                </div>
            </div>
        )
    }
}