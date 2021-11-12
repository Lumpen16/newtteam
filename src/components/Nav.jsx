import React from 'react';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import './Nav.css'
import ModalCall from './ModalCall'
function Nav()
{
    const [modalActive, setModalActive] = useState(false);
    const [menuActive, setMenuActive] = useState(window.screen.availWidth < 480 ? "none" : "block");

    function scrollUp() {
        window.scrollTo(0, 0)
    }
    function handleClick() {
        if (menuActive === "none") {
            setMenuActive("block");
        }
        else{
            setMenuActive("none");
        }

    }
        return (
            <div className={"nav"}>
                <div onClick={scrollUp} className={"nav_logo"}>
                    <Link to="/">
                    <svg width="126" height="32" viewBox="0 0 126 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.162 6.41766C28.8292 9.23316 30.3158 12.9639 30.3158 16.8422H24.2526C24.2526 14.5152 23.3607 12.2768 21.7604 10.5875C20.16 8.89818 17.973 7.88655 15.6495 7.76078C13.3259 7.63501 11.0425 8.40466 9.26918 9.91134C7.49585 11.418 6.3675 13.5471 6.11633 15.8605C5.86515 18.1739 6.51026 20.4955 7.9189 22.3477C9.32753 24.1999 11.3925 25.4417 13.689 25.8175C15.9854 26.1933 18.3385 25.6747 20.2641 24.3682C21.5638 23.4864 22.602 22.2909 23.2932 20.9081H29.7603C28.8001 24.3573 26.6459 27.3652 23.6682 29.3855C20.4589 31.563 16.537 32.4274 12.7097 31.801C8.88229 31.1746 5.44062 29.105 3.09289 26.018C0.74516 22.9311 -0.330021 19.0617 0.0886058 15.206C0.507232 11.3504 2.38782 7.80192 5.34336 5.29077C8.29891 2.77963 12.1046 1.49688 15.9772 1.7065C19.8498 1.91612 23.4948 3.60216 26.162 6.41766Z" fill="black"/>
                        <path d="M32.0001 16.8421C32.0001 14.6303 31.5644 12.4403 30.718 10.3969C29.8716 8.35352 28.6311 6.49686 27.0671 4.93293C25.5032 3.369 23.6465 2.12842 21.6032 1.28203C19.5598 0.435633 17.3697 -9.66779e-08 15.158 0L15.158 10.9474C15.9321 10.9474 16.6986 11.0998 17.4138 11.3961C18.129 11.6923 18.7788 12.1265 19.3262 12.6739C19.8735 13.2213 20.3077 13.8711 20.604 14.5863C20.9002 15.3014 21.0527 16.068 21.0527 16.8421H32.0001Z" fill="black"/>
                        <path d="M15.1579 5.05273C13.6097 5.05273 12.0766 5.35768 10.6462 5.95015C9.21588 6.54263 7.91622 7.41103 6.82146 8.50579C5.72671 9.60054 4.8583 10.9002 4.26583 12.3306C3.67335 13.7609 3.36841 15.294 3.36841 16.8422C3.36841 18.3904 3.67335 19.9235 4.26583 21.3538C4.8583 22.7842 5.72671 24.0838 6.82146 25.1786C7.91622 26.2734 9.21588 27.1418 10.6462 27.7342C12.0766 28.3267 13.6097 28.6317 15.1579 28.6317L15.1579 22.7369C14.3838 22.7369 13.6172 22.5845 12.9021 22.2882C12.1869 21.992 11.537 21.5578 10.9897 21.0104C10.4423 20.463 10.0081 19.8132 9.71185 19.098C9.41561 18.3828 9.26314 17.6163 9.26314 16.8422C9.26314 16.0681 9.41561 15.3016 9.71185 14.5864C10.0081 13.8712 10.4423 13.2214 10.9897 12.674C11.537 12.1266 12.1869 11.6924 12.9021 11.3962C13.6172 11.0999 14.3838 10.9475 15.1579 10.9475V5.05273Z" fill="#484848"/>
                        <path d="M15.1579 1.68433C13.1673 1.68433 11.1963 2.0764 9.35722 2.83815C7.51818 3.59991 5.84718 4.71643 4.43964 6.12396C3.0321 7.5315 1.91558 9.2025 1.15383 11.0415C0.39207 12.8806 -3.00566e-07 14.8516 0 16.8422L6.06316 16.8422C6.06316 15.6479 6.2984 14.4652 6.75545 13.3618C7.2125 12.2584 7.88242 11.2558 8.72694 10.4113C9.57146 9.56673 10.5741 8.89682 11.6775 8.43977C12.7809 7.98272 13.9636 7.74748 15.1579 7.74748V1.68433Z" fill="black"/>
                        <ellipse cx="29.4737" cy="14.0801" rx="1.01053" ry="1.01052" fill="white"/>
                        <path d="M21.8948 16.8421C21.8948 15.5096 21.4997 14.2071 20.7595 13.0993C20.0192 11.9914 18.9671 11.1279 17.7361 10.618C16.5051 10.1081 15.1505 9.97473 13.8437 10.2347C12.5369 10.4946 11.3365 11.1362 10.3943 12.0784C9.45215 13.0206 8.81053 14.2209 8.55059 15.5278C8.29065 16.8346 8.42406 18.1891 8.93395 19.4201C9.44385 20.6511 10.3073 21.7033 11.4152 22.4435C12.5231 23.1838 13.8256 23.5789 15.158 23.5789V19.5368C14.625 19.5368 14.104 19.3787 13.6609 19.0826C13.2177 18.7865 12.8723 18.3657 12.6684 17.8733C12.4644 17.3809 12.411 16.8391 12.515 16.3163C12.619 15.7936 12.8757 15.3135 13.2525 14.9366C13.6294 14.5597 14.1095 14.3031 14.6323 14.1991C15.155 14.0951 15.6968 14.1485 16.1892 14.3524C16.6816 14.5564 17.1025 14.9018 17.3986 15.3449C17.6947 15.7881 17.8527 16.3091 17.8527 16.8421H21.8948Z" fill="#C4C4C4"/>
                        <path d="M45.3729 26.3798H40V3.97559H44.5237L53.9726 17.002H54.0961V3.97559H59.469V26.3798H54.9916L45.4964 13.2292H45.3729V26.3798Z" fill="black"/>
                        <path d="M70.4309 12.9807C69.5972 12.9807 68.8921 13.2654 68.3157 13.8347C67.7496 14.3936 67.4305 15.113 67.3585 15.9928H73.4725C73.421 15.0923 73.1173 14.3677 72.5615 13.8191C72.0057 13.2602 71.2955 12.9807 70.4309 12.9807ZM73.596 21.0388H78.5365C78.2689 22.7881 77.4146 24.1854 75.9736 25.2308C74.5326 26.2659 72.7159 26.7834 70.5235 26.7834C67.8474 26.7834 65.7528 26.0071 64.2397 24.4545C62.7267 22.8916 61.9702 20.7438 61.9702 18.0112C61.9702 15.2786 62.7215 13.1049 64.2243 11.4902C65.7374 9.87551 67.7753 9.06815 70.3383 9.06815C72.8703 9.06815 74.8826 9.83928 76.375 11.3815C77.8778 12.9238 78.6292 14.9888 78.6292 17.5765V19.1291H67.2813V19.4706C67.2813 20.485 67.5849 21.3079 68.1922 21.9393C68.8098 22.5707 69.6126 22.8864 70.6007 22.8864C71.3315 22.8864 71.9645 22.7208 72.4998 22.3896C73.035 22.0583 73.4004 21.6081 73.596 21.0388Z" fill="black"/>
                        <path d="M105.339 9.47183L101.001 26.3798H95.1029L92.4319 14.9991H92.3239L89.6992 26.3798H83.894L79.5247 9.47183H85.0519L87.198 21.4114H87.3061L89.869 9.47183H95.1029L97.6968 21.4114H97.8048L99.9355 9.47183H105.339Z" fill="black"/>
                        <path d="M108.257 5.68346H113.738V9.47183H116.764V13.5241H113.738V20.6196C113.738 21.7892 114.382 22.374 115.668 22.374C116.121 22.374 116.481 22.3482 116.749 22.2964V26.209C116.1 26.3435 115.303 26.4108 114.356 26.4108C112.174 26.4108 110.609 26.0485 109.662 25.324C108.726 24.5994 108.257 23.4039 108.257 21.7375V13.5241H105.972V9.47183H108.257V5.68346Z" fill="black"/>
                        <path d="M124.314 25.7432C123.758 26.3021 123.084 26.5816 122.292 26.5816C121.499 26.5816 120.825 26.3021 120.269 25.7432C119.713 25.1739 119.435 24.4908 119.435 23.6938C119.435 22.8967 119.713 22.2188 120.269 21.6598C120.825 21.0905 121.499 20.8059 122.292 20.8059C123.084 20.8059 123.758 21.0905 124.314 21.6598C124.88 22.2188 125.163 22.8967 125.163 23.6938C125.163 24.4908 124.88 25.1739 124.314 25.7432Z" fill="black"/>
                    </svg>
                    </Link>

                </div>
                <svg className="dp_menu_button" onClick={handleClick} style={{float: "right", margin: "8px 18px 8px 205px"}} width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="7.5" y1="2.5" x2="28.5" y2="2.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
                    <line x1="1.5" y1="10.5" x2="28.5" y2="10.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
                    <line x1="1.5" y1="18.5" x2="28.5" y2="18.5" stroke="black" stroke-width="3" stroke-linecap="round"/>
                </svg>

                <div style={{display: `${menuActive}`}} className="dp_menu">
                <div className={"nav_contents"}>
                    <div className={"nav_main"} onClick={scrollUp}><span><Link to="/">Главная</Link></span></div>
                    <div className={"nav_about"}><span><a href="#about-us">О нас</a></span></div>
                    <div className={"nav_solutions"}><span><a href="#solutions">Наши решения</a></span></div>
                    <div className={"nav_contacts"}><span><a href="#contacts">Контакты</a></span></div>
                    <div id="modal-desk" className={"nav_callback"}><ModalCall active={modalActive} setActive={setModalActive} /><span className="nav_callback_span" onClick={() => setModalActive(true)}>Связаться с нами</span></div>
                </div>

                </div>
                <div className={"nav_callback"}><ModalCall active={modalActive} setActive={setModalActive} /><span className="nav_callback_span" onClick={() => setModalActive(true)}>Связаться с нами</span></div>
            </div>

        )

}



export default Nav;