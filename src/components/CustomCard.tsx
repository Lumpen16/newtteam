import React, {useState} from 'react';
import ModalCall from "./ModalCall";
import FoodCard from "./FoodCard";

export default function CustomCard(props: any) {

    const [modalActive, setModalActive] = useState(false);
    const formElement = document.querySelector('.modal-call');

    const handleClick = () => {
        let element:HTMLElement = document.querySelector('.nav_callback_span') as HTMLElement;
        element.click()
    }
        return (
            <>


                <div>
                <div className={"product_cards_second " + props.classy}>
                    <h1 className="product_cards_second_header">
                        Newt.custom
                    </h1>
                    <p className="product_cards_second_description">
                        Есть идеи для собственного бизнеса?<br/>Расскажите о них!
                    </p>
                    <ul className="product_cards_second_list">
                        <li>Мобильное приложение или сайт</li>
                        <li>Telegram или WhatsApp бот</li>
                        <li>Интеграция с CRM/CMS системами</li>
                        <li>Интеграция с эквайрингом и продуктами банков</li>
                    </ul>
                    <p className="product_cards_second_call">

                        <span onClick={handleClick}>Связаться с нами</span>
                    </p>
                </div>
                </div>
                <FoodCard name="last" classy={"product_cards_first" + " " + props.classy}/>
            </>
        )

}