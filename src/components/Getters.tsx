import React from 'react';
import './Getters.css'
import SlidingShit from './SlidingShit'

export default class Getters extends React.Component {
    render () {
        return (
            <div className="getters">
                <h1 className="getters_header">
                    Что вы получаете?
                </h1>
                {/*<div className="getters_slider">*/}
                {/*    <div className="getters_buisiness">*/}
                {/*        <div className="getters_slidingshit">*/}

                {/*        </div>*/}
                {/*        Бизнес*/}
                {/*        <span className="getters_txt">Бизнес</span>*/}

                {/*    </div>*/}
                {/*    <div className="getters_client">*/}
                {/*        Клиент*/}
                {/*        <span className="getters_txt">Клиент</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <SlidingShit />
            </div>
        )
    }
}