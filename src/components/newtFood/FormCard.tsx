import React, {useState} from 'react';
import ClientCard from './ClientCard'

export default function FormCard(props: any) {
    const [passed, setPassed] = useState(false);

    function handlePass() {
        setPassed(true);
        setTimeout(() => {setPassed(false);}, 5000)
    }
    return (
        <>
            <div>
                <div className={"food-pieces_form" + " " + props.classy}>
                    <div  className={passed ? "passed passed-visible" : "passed"}>
                        <svg width="208" height="209" viewBox="0 0 208 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81.7878 128.484L83.202 129.894L84.6142 128.482L151.731 61.3654L163.577 73.295L83.2 153.672L34.0284 104.5L45.866 92.6625L81.7878 128.484ZM2 104.5C2 48.1966 47.6966 2.5 104 2.5C160.303 2.5 206 48.1966 206 104.5C206 160.803 160.303 206.5 104 206.5C47.6966 206.5 2 160.803 2 104.5ZM18.8 104.5C18.8 151.573 56.9274 189.7 104 189.7C151.073 189.7 189.2 151.573 189.2 104.5C189.2 57.4274 151.073 19.3 104 19.3C56.9274 19.3 18.8 57.4274 18.8 104.5Z" fill="#5A97E5" stroke="white" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                        <h1>
                            Мы приняли заявку. Скоро свяжемся с вами!
                        </h1>
                    </div>
                    <h1 className={"food-pieces_form_header"}>
                        Заполните форму и узнайте больше!
                    </h1>
                    <p className="food-pieces_form_description">
                        Мы свяжемся с вами как можно скорее и ответим на все ваши вопросы.
                    </p>
                    <div className="food-pieces_form_form">
                        {/*<div className="callback_wrapper_form_inputs">*/}
                        <input type="text" placeholder="Как вас зовут?*" />
                        <input type="text" placeholder="Эл.Почта*" />
                        <input id="last" type="text" placeholder="Телефон" />
                        {/*</div>*/}
                        <button onClick={handlePass} className="form-submit" id="callback_submit" type="submit">Отправить</button>
                    </div>
                    <p className={"form_shit"}>Нажимая на кнопку, вы соглашаетесь с <span className="callback_wrapper_underlined form-card_underline">условиями сервиса</span></p>
                </div>
            </div>
            <ClientCard classy={"food-pieces_client last " + props.classy}/>

        </>
    )

}