import React, {useState} from 'react';

import './ModalCall.css'


export default function ModalCall({active, setActive} : any) {
    // const [width, setWidth] = useState(0);
    // const [height, setHeight] = useState(0);
    const [passed, setPassed] = useState(false);
    const element = document.querySelector('.modal-call');

    const handlePass = () => {
        // setWidth((document.getElementById("modal_test")as HTMLElement)?.getBoundingClientRect().width);
        // setHeight((document.getElementById("modal_test")as HTMLElement)?.getBoundingClientRect().height);
        setPassed(true);
        setTimeout(() => {setPassed(false)}, 5000)
    }
        return (
            <div className={active ? "modal-call modal-call-active" : "modal-call"} onClick={() => {setActive(false);}}>
                <div id={"modal_test"} className="modal callback_wrapper" onClick={e => {e.stopPropagation();}}>
                    <div className={passed ? "passed passed-visible" : "passed"}>
                        <svg width="208" height="209" viewBox="0 0 208 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M81.7878 128.484L83.202 129.894L84.6142 128.482L151.731 61.3654L163.577 73.295L83.2 153.672L34.0284 104.5L45.866 92.6625L81.7878 128.484ZM2 104.5C2 48.1966 47.6966 2.5 104 2.5C160.303 2.5 206 48.1966 206 104.5C206 160.803 160.303 206.5 104 206.5C47.6966 206.5 2 160.803 2 104.5ZM18.8 104.5C18.8 151.573 56.9274 189.7 104 189.7C151.073 189.7 189.2 151.573 189.2 104.5C189.2 57.4274 151.073 19.3 104 19.3C56.9274 19.3 18.8 57.4274 18.8 104.5Z" fill="#5A97E5" stroke="white" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                        <h1>
                            Мы приняли заявку. Скоро свяжемся с вами!
                        </h1>
                    </div>
                    <div className="close_button" onClick={() => {
                        setActive(false);
                        // element?.classList.remove('modal-call-active')
                    }}>
                        <div><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.814844 0.814794C1.30491 0.324725 2.08156 0.295897 2.60535 0.728311L2.70046 0.814794L5.99959 4.11439L9.30013 0.814795C9.82082 0.294096 10.665 0.294095 11.1857 0.814794C11.6758 1.30486 11.7046 2.08151 11.2722 2.6053L11.1857 2.70041L7.88544 6.00024L11.1857 9.30008C11.7064 9.82077 11.7064 10.665 11.1857 11.1857C10.6957 11.6758 9.91903 11.7046 9.39524 11.2722L9.30013 11.1857L5.99959 7.8861L2.70046 11.1857C2.17976 11.7064 1.33554 11.7064 0.814844 11.1857C0.324775 10.6956 0.295947 9.91898 0.728361 9.39519L0.814844 9.30008L4.11373 6.00024L0.814844 2.70041C0.294145 2.17971 0.294145 1.33549 0.814844 0.814794Z" fill="#5A97E5"/>
                        </svg>
                        </div>
                    </div>
                    <h1 className="callback_wrapper_header">Хотите сотрудничать с нами?</h1>
                    <h1 className="callback_wrapper_header">У вас остались вопросы?</h1>
                    <p className="callback_wrapper_par">Заполните форму, и мы свяжемся с вами!</p>
                    <div className="callback_wrapper_form">
                        {/*<div className="callback_wrapper_form_inputs">*/}
                        <input type="text" placeholder="Как вас зовут?*" />
                        <input type="text" placeholder="Эл.Почта*" />
                        <input id="last" type="text" placeholder="Телефон" />
                        {/*</div>*/}
                        <button onClick={handlePass} id="callback_submit" type="submit">Отправить</button>
                    </div>
                    <p>Нажимая на кнопку, вы соглашаетесь с <span className="callback_wrapper_underlined">условиями сервиса</span></p>
                </div>
            </div>
        )

}