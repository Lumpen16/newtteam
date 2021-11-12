import React from 'react';
declare const window: any;
const rest = [<span>Веб-сайт - проверенная классика</span>,
    <span>Веб-сайт подойдет ресторанам. С этим решением клиент бронирует столик онлайн или сразу выбирает необходимые блюда.</span>
    , <span>Веб-сайт помогает сделать заказ в 3 клика как с компьютера, так и с телефона.</span>,

    <span>Newt.food для ресторанов</span>,
    <span>от 5500 ₽/мес</span>,]

const cof = [<span>Telegram Lite - скорость и удобство</span>,
    <span>Заберите ароматный кофе и завтрак за пару минут без ожидания в очереди. Посетителю не нужно ничего скачивать: любимые блюда ждут, когда их закажут в Telegram-боте.</span>,
    <span>Бот проведет оплату, покажет дорогу до заведения и пожелает приятного аппетита!
А бизнесмен увеличит поток клиентов
и упростит работу сотрудникам.</span>,
    <span>Newt.food для кофейни</span>,
    <span>от 1000 ₽/мес</span>
]

const set = [<span>Мобильное приложение - диалог на “ты”</span>,
    <span>У заведения более 5 точек? Мобильное приложение поможет взаимодействовать
с посетителями напрямую.</span>,
    <span>Все функции нашего решения в виде приложения. Подписка для каждой следующей точки со скидкой!</span>,
    <span>Newt.food для сетей</span>,
    <span>от 7500 ₽/мес</span>
]

const prof = [<span>Telegram Professional - в ритме города</span>,
    <span>Подойдет точкам и сетям фастфуда.
Как в Lite, только выполняет больше полезных функций и ускоряет работу бизнеса.</span>,
    <span>Заказы, оплата, статистика, маршрут
до заведения - все о Professional. Доступны
и дополнительные опции, ознакомьтесь ниже!</span>,
    <span>Newt.food для ресторанов</span>,
    <span>от 3000 ₽/мес</span>
]


export default class SlidingFood extends React.Component<{}, {index: number, classy: string, content: Array<any>}> {
    public second: number;
    public third: number;
    public fourth: number;
    public width: number;
    constructor(props: any) {
        super(props);
        this.state = {
            index: 0,
            classy: "food-vars_slide slider_0",
            content: rest
        }

        const size = window.screen.width
        this.second = size === 1920 ? -100 : -100 * size / 1920 * 1.25
        this.third = size === 1920 ? -200 : -200 * size / 1920 * 1.25
        this.fourth = size === 1920 ? -297 : -297 * size / 1920 * 1.25
        this.width = 70 * size / 1920
        // this.handleClick = this.handleClick.bind(this);
        this.handleClick0 = this.handleClick0.bind(this);
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
    }
    // handleClick(num: number) {
    //     switch (num) {
    //         case 0: this.setState({ index: 0, classy: "food-vars_slider slider_0", content: rest }); break;
    //         case 1: this.setState({ index: 1, classy: "food-vars_slider slider_1", content: cof}); break;
    //         case 2: this.setState({ index: 2, classy: "food-vars_slider slider_2", content: set}); break;
    //         case 3: this.setState({ index: 3, classy: "food-vars_slider slider_3", content: prof}); break;
    //     }
    // }
    handleClick0() {
        if (this.state.index != 0) {

            this.setState({index: 0, classy: "food-vars_slide slider_0", content: rest});
        }
    }
    handleClick1() {
        if (this.state.index != 1) {
            switch(this.state.index){
                case 0: {

                }
            }
            this.setState({index: this.second, classy: "food-vars_slide slider_1", content: cof});
        }
    }
    handleClick2() {
        if (this.state.index != 2) {
            this.setState({index: this.third, classy: "food-vars_slide slider_2", content: set});
        }
    }
    handleClick3() {
        if (this.state.index != 3) {
            this.setState({index: this.fourth, classy: "food-vars_slide slider_3", content: prof});
        }
    }



    render() {
        return (
            <div className="food-vars_slider">

                <div className="food-vars_slider_header">

                    <div className={"food-vars_slider_container first_header"}> <div style={{width: `${this.width}%`, transition: `transform 1s`, transform: `translateX(${-this.state.index}%)`}} className={"food-vars_slide"}></div>Ресторан<span className={"slider_txt"} onClick={this.handleClick0}>Ресторан</span></div>
                    <div className={"food-vars_slider_container"}>Кофейня<span className={"slider_txt"} onClick={this.handleClick1}>Кофейня</span></div>
                    <div className={"food-vars_slider_container"}>Сеть<span className={"slider_txt"} onClick={this.handleClick2}>Сеть</span></div>
                    <div className={"food-vars_slider_container last_header"}>Фастфуд<span className={"slider_txt"} onClick={this.handleClick3}>Фастфуд</span></div>
                </div>
                <div className="food-vars_slider_content">
                    <h1>
                        {this.state.content[0]}
                    </h1>
                    <ul>
                        <li>{this.state.content[1]}</li>
                        <li>{this.state.content[2]}</li>
                    </ul>
                    <div className="food-vars_slider_footer">
                        <div className="food-vars-for">{this.state.content[3]}</div>
                        <div className={"food-vars_price"}>{this.state.content[4]}</div>
                        <button>Оставить заявку</button>
                    </div>
                </div>
            </div>
        )
    }
}