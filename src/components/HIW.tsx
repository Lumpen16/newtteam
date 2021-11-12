import React from 'react';
import './HIW.css'

export default class HIW extends React.Component {
    render() {
        return (
            <div className="hiw">
                <div className={"hiw_container"}>
                <img src="/iphone.png" alt="jopa" />
                <div className="hiw_block">
                    <h1 className="hiw_header">
                        Как это работает?
                    </h1>
                    <ul className="hiw_list">
                        <li>Узнаем о потребностях и целях бизнеса, заключаем договор.</li>
                        <li>Составляем каталог товаров, подключаем кассу и эквайринг.</li>
                        <li>Собираем программное обеспечение, создаем веб-сайт, <br /> делаем мобильное приложение и Telegram-бот</li>
                        <li>Внедряем в бизнес и сопровождаем рабочее решение</li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}