import React from 'react';


const buisiness: Array<any> = [<span>Рост заказов и прибыли меньшими<br />усилиями за меньшее время.</span>, <span>Довольного клиента, который быстро<br />получил свой заказ.</span>, <span>Сотрудников, которые полны сил<br />и работают с интересом.</span>, <span>Новые высоты за счет рационального<br />использования ресурсов.</span>]

const client: Array<any> = [<span>Продукт в 3 клика. Никаких очередей.</span>, <span>Удобный способ оплаты.
</span>, <span>Комфортные каталог или меню, в которых<br/>легко сделать правильный выбор.</span>, <span>Заботу о здоровье: социальную<br/> дистанцию и меньший риск заболеть.</span>]

export default class SlidingShit extends React.Component<{}, { left: boolean, classy: string, content: Array<any>}> {
    constructor(props: any) {
        super(props);
        this.state = {
            left: true,
            classy: 'getters_slidingshit left',
            content: buisiness
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.state.left) {
            this.setState({left: false, classy: "getters_slidingshit right", content: client})
        }
        else {
            this.setState({left: true, classy: "getters_slidingshit left", content: buisiness})
        }
    }

    render () {
        return (
            <>
                <div className="getters_slider">
                    <div className="getters_buisiness">
                        <div className={this.state.classy}>

                        </div>
                        Бизнес
                        <span className="getters_txt" id="left" onClick={this.handleClick}>Бизнес</span>

                    </div>
                    <div className="getters_client">
                        Клиент
                        <span className="getters_txt" id="right" onClick={this.handleClick}>Клиент</span>
                    </div>
                </div>
                <ul className="getters_list">
                    <li>{this.state.content[0]}</li>
                    <li>{this.state.content[1]}</li>
                    <li>{this.state.content[2]}</li>
                    <li>{this.state.content[3]}</li>
                </ul>
            </>
        )
    }
}


