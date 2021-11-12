import React from 'react';
import './Partners.css'

export default class Partners extends React.Component<{}, {classy: string}> {
    constructor(props: any) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrevious = this.handlePrevious.bind(this)
        this.state = {
            classy: "carousel_item prev_item"
        }
    }
    handleNext() {
        this.setState({classy: "carousel_item next_item"})
    }
    handlePrevious() {
        this.setState({classy: "carousel_item prev_item"})
    }
    render () {
        return (
            <div className="partners">
                <h1>
                    Наши партнеры
                </h1>
                <div className="partners_carousel">
                    <div className="product_cards_pointers">
                        <svg onClick={this.handlePrevious} className="product_cards_left_pointer" width="27" height="46" viewBox="0 0 27 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.014 39.6027C26.2876 40.8365 26.3364 42.8864 25.123 44.1814C23.9097 45.4763 21.8935 45.526 20.6199 44.2923C20.6199 44.2923 0.965745 24.9587 0.912138 24.9025C-0.3439 23.5665 -0.296923 21.4482 1.01706 20.1711L20.6197 0.897743C21.8913 -0.33815 23.9075 -0.291924 25.123 1.00099C26.3386 2.2939 26.2931 4.3439 25.0215 5.5798L8.36689 22.2377C8.17171 22.433 8.17167 22.7494 8.36681 22.9447L25.014 39.6027Z" fill="#DFDFDF"/>
                        </svg>
                        <svg onClick={this.handleNext} className="product_cards_right_pointer" width="27" height="46" viewBox="0 0 27 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.014 39.6027C26.2876 40.8365 26.3364 42.8864 25.123 44.1814C23.9097 45.4763 21.8935 45.526 20.6199 44.2923C20.6199 44.2923 0.965745 24.9587 0.912138 24.9025C-0.3439 23.5665 -0.296923 21.4482 1.01706 20.1711L20.6197 0.897741C21.8913 -0.338152 23.9075 -0.291925 25.123 1.00099C26.3386 2.2939 26.2931 4.3439 25.0215 5.57979L8.36689 22.2377C8.17171 22.433 8.17167 22.7494 8.36681 22.9447L25.014 39.6027Z" fill="#DFDFDF"/>
                        </svg>

                    </div>
                    <div className={this.state.classy + " " + "first_item"}>
                        <svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_241_31)">
                                <path d="M103.079 22.8711C105.812 26.4481 108.126 30.3343 109.974 34.4515L57.5575 73.5608L35.6511 59.6616V42.9401L57.5575 56.8393L103.079 22.8711Z" fill="black"/>
                                <path d="M13.2939 58.4812C13.2939 57.7308 13.312 56.9855 13.3482 56.2444L0.0723027 55.5859C0.027116 56.5464 1.60433e-05 57.5161 1.60433e-05 58.4947C-0.00563247 66.1412 1.48032 73.7133 4.37267 80.7769C7.265 87.8408 11.5068 94.2569 16.8547 99.6574L26.2716 90.1306C22.155 85.9808 18.8892 81.0482 16.6621 75.6167C14.4349 70.1853 13.2903 64.3617 13.2939 58.4812Z" fill="black"/>
                                <path d="M57.5453 13.6946C58.2863 13.6946 59.0226 13.722 59.7546 13.7586L60.4189 0.316692C59.4672 0.270955 58.5091 0.24809 57.5453 0.24809C49.9871 0.238761 42.5019 1.74062 35.519 4.66742C28.5361 7.59423 22.1932 11.8883 16.8545 17.3032L26.2714 26.8346C30.3716 22.6666 35.2453 19.3599 40.6125 17.1049C45.9796 14.8499 51.7339 13.6909 57.5453 13.6946Z" fill="black"/>
                                <path d="M57.5452 103.272C56.8043 103.272 56.0676 103.272 55.3313 103.213L54.667 116.65C55.6219 116.699 56.5814 116.723 57.5452 116.723C65.1003 116.731 72.5819 115.228 79.561 112.301C86.5402 109.373 92.879 105.078 98.2136 99.6635L88.8148 90.1367C84.7138 94.3026 79.8406 97.6073 74.4745 99.8615C69.1085 102.116 63.3552 103.275 57.5452 103.272Z" fill="black"/>
                                <path d="M82.489 21.5087L93.6772 13.1618C83.451 4.78044 70.6861 0.217945 57.5276 0.2413V13.6923C66.438 13.6812 75.1415 16.4067 82.489 21.5087Z" fill="black"/>
                                <path d="M115.087 58.482C115.094 54.9828 114.791 51.4896 114.183 48.0449L101.797 57.2836C101.797 57.6818 101.797 58.0796 101.797 58.482C101.8 64.74 100.504 70.9289 97.9932 76.6474C95.4818 82.3659 91.8113 87.4865 87.2197 91.6773L96.1533 101.671C102.123 96.2164 106.893 89.5531 110.154 82.1131C113.416 74.6728 115.097 66.6217 115.087 58.482Z" fill="black"/>
                                <path d="M57.5456 103.273C51.3623 103.275 45.2475 101.963 39.5969 99.4214C33.9466 96.8798 28.8865 93.1652 24.7445 88.5186L14.8757 97.5561C20.2641 103.599 26.8471 108.428 34.1979 111.73C41.5488 115.032 49.5032 116.734 57.5456 116.724V103.273Z" fill="black"/>
                                <path d="M27.8712 25.2864L18.9423 15.293C12.9712 20.7465 8.19929 27.4094 4.93602 34.8496C1.67279 42.2898 -0.00889671 50.3413 3.53954e-05 58.4817H13.294C13.2912 52.224 14.5875 46.0351 17.0986 40.3166C19.6098 34.5983 23.2799 29.4775 27.8712 25.2864Z" fill="black"/>
                                <path d="M332.074 33.5488L348.539 21.4102H293.435V94.3526H348.539V82.2141H309.158V63.5297H342.752V51.3912H309.158V33.5488H332.074Z" fill="black"/>
                                <path d="M256.358 49.8257H237.227V33.5437H267.759L284.214 21.3682H221.513V94.3107H254.334C272.735 94.3107 283.296 85.9648 283.296 71.4096C283.296 57.4851 273.73 49.8257 256.358 49.8257ZM253.626 82.1682H237.227V61.9568H253.626C263.579 61.9568 268.245 65.3439 268.245 72.0627C268.245 78.7812 263.28 82.1682 253.626 82.1682Z" fill="black"/>
                                <path d="M389.044 21.3994H359.05V94.3416H374.771V73.6784H389.044C408.182 73.6784 420.02 63.6014 420.02 47.4999C420.02 31.399 408.182 21.3994 389.044 21.3994ZM388.713 61.5305H374.771V33.5473H388.713C398.779 33.5473 404.334 38.5194 404.334 47.5444C404.334 56.5695 398.779 61.5305 388.713 61.5305Z" fill="black"/>
                                <path d="M197.92 77.1268C193.859 79.3276 189.308 80.4671 184.69 80.4401C170.868 80.4401 160.841 70.5653 160.841 56.9678C160.841 43.3698 170.868 33.4737 184.69 33.4737C189.675 33.389 194.556 34.9015 198.621 37.7906L209.618 29.6857L208.874 29.1569C202.459 23.5128 193.887 20.5234 184.076 20.5234C173.434 20.5234 163.785 24.1063 156.895 30.6246C153.411 33.9808 150.656 38.0196 148.801 42.4888C146.946 46.9581 146.031 51.7617 146.113 56.6006C146.039 61.4887 146.95 66.3414 148.792 70.8695C150.633 75.3975 153.367 79.5074 156.83 82.9546C163.752 89.7319 173.38 93.4657 183.947 93.4657C194.987 93.4657 204.637 89.6129 211.171 82.5985L201.327 75.26L197.92 77.1268Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_241_31">
                                    <rect width="420" height="117.518" fill="white" transform="translate(0 0.241211)"/>
                                </clipPath>
                            </defs>
                        </svg>

                    </div>
                    <div className={this.state.classy}>
                        <svg width="414" height="86" viewBox="0 0 414 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M78.6624 0C54.5428 0 35.3569 19.3228 35.3569 43C35.3569 66.9493 54.817 86 78.6624 86C102.508 86 121.968 66.6772 121.968 43C122.242 19.3228 102.508 0 78.6624 0ZM78.6624 59.0569C69.8916 59.0569 62.4913 51.7089 62.4913 43C62.4913 34.2911 69.8916 26.9431 78.6624 26.9431C87.4331 26.9431 94.8333 34.2911 94.8333 43C94.8333 51.7089 87.7072 59.0569 78.6624 59.0569Z" fill="black"/>
                        <path d="M35.357 12.5195V75.1145H19.7341L0 12.5195H35.357Z" fill="black"/>
                        <path d="M400.712 23.6768L391.119 47.0818C390.845 47.3539 390.845 47.8981 390.845 48.1704L390.57 48.7146L390.296 48.1704C390.296 47.8981 390.023 47.3539 390.023 47.0818L380.43 23.6768H368.096L384.266 63.6831L377.416 78.9235H389.749L412.498 23.6768H400.712Z" fill="black"/>
                        <path d="M309.715 25.8541C307.522 24.2211 304.782 23.1326 301.493 22.8604C296.012 22.3161 290.805 24.2211 287.242 27.7592V23.4048H276.003V63.4112H287.242V42.4554C287.242 37.8287 288.063 36.4681 288.885 35.3795C290.256 33.2023 292.722 32.1137 295.738 32.1137C298.752 32.1137 301.492 33.4744 302.864 35.6516C303.685 37.2845 303.959 39.4617 303.959 40.5503C303.959 44.0883 303.959 63.4112 303.959 63.4112H315.198V39.1896C315.198 32.93 313.279 28.5757 309.715 25.8541Z" fill="black"/>
                        <path d="M254.624 23.9494C249.143 22.0443 243.113 22.3166 237.631 24.7659C234.068 26.3988 230.78 29.1202 228.86 32.6583C226.941 35.6519 226.12 39.4621 226.12 43.5443C226.12 47.6266 226.941 51.4367 228.86 54.4304C230.78 57.424 233.246 60.1456 236.534 61.7785C239.824 63.4115 243.661 64.5001 247.224 64.5001C249.143 64.5001 251.061 64.2278 252.98 63.6836C254.624 63.1392 256.269 62.595 257.913 61.7785C261.203 59.8735 263.943 57.424 265.589 54.4304C267.506 51.4367 268.329 47.6266 268.329 43.5443C268.603 34.5633 263.396 26.943 254.624 23.9494ZM257.913 44.0887C257.64 47.6266 256.543 50.6202 254.35 52.5253C252.706 53.8862 250.24 54.7026 247.224 54.9747C244.21 54.9747 242.017 54.1583 240.097 52.5253C237.906 50.6202 236.81 47.6266 236.534 44.0887C236.261 40.0064 237.906 36.7405 240.92 34.5633C242.564 33.4747 244.757 32.6583 246.95 32.6583C249.417 32.6583 251.336 33.4747 253.254 34.5633C256.543 36.4684 258.187 40.0064 257.913 44.0887Z" fill="black"/>
                        <path d="M213.238 25.854C211.045 24.2212 208.304 23.1326 205.015 22.8604C204.467 22.8604 203.645 22.8604 203.097 22.8604C198.711 22.8604 194.874 24.7654 191.585 28.5756L191.038 29.3921H189.941C189.118 28.0314 188.022 26.9428 186.925 26.1263C184.732 24.4933 181.992 23.4047 178.702 23.1326C173.495 22.5882 169.384 24.2212 165.821 28.0314V23.9491H154.584V63.9553H165.821V42.9997V42.4553C165.821 38.1009 166.369 37.0123 167.192 35.6516C168.562 33.4743 171.029 32.1136 173.769 32.3857C176.511 32.3857 178.978 33.7466 180.348 35.9238C181.445 37.5566 181.445 39.4616 181.445 41.3667V63.6832H192.681V42.1832C192.681 38.1009 193.229 36.7402 194.052 35.3794C195.422 33.2022 197.888 32.1136 200.631 32.1136C203.371 32.1136 205.564 33.4743 206.934 35.6516C207.757 37.0123 208.031 38.6453 208.031 39.7339C208.031 40.2781 208.031 40.8225 208.031 41.0946V63.4111H219.268V38.9174C219.268 36.7402 218.994 34.5629 218.445 32.6578C217.35 29.9364 215.704 27.487 213.238 25.854Z" fill="black"/>
                        <path d="M357.407 51.4369C355.763 53.0699 351.924 56.0636 346.717 56.3357C342.331 56.6078 339.043 55.2471 336.577 52.7978C335.48 51.709 334.657 50.0762 334.11 48.4433H365.08V48.1712C365.356 46.5382 365.629 45.1775 365.629 43.5445C365.629 42.1839 365.356 40.2788 364.807 37.8293C363.436 33.2027 360.696 29.6648 357.133 26.9433C353.021 23.9496 349.184 23.1331 348.087 23.1331C340.14 21.7724 331.094 25.3103 326.435 32.6585C323.145 37.8293 323.42 43.0002 323.42 44.6331C323.42 46.5382 323.694 52.5255 328.628 57.9686C334.384 64.2281 342.331 64.5002 344.798 64.7724C355.763 65.0445 363.163 58.2407 364.807 56.8801L357.407 51.4369ZM338.221 34.5636C339.864 33.475 341.784 32.6585 344.25 32.6585C346.717 32.6585 348.636 33.475 350.554 34.5636C352.2 35.9243 353.57 37.5572 354.391 39.4623H334.657C334.931 37.5572 336.301 35.6522 338.221 34.5636Z" fill="black"/>
                    </svg>
                    </div>
                    <div className={this.state.classy}>
                        <svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_241_31)">
                            <path d="M103.079 22.8711C105.812 26.4481 108.126 30.3343 109.974 34.4515L57.5575 73.5608L35.6511 59.6616V42.9401L57.5575 56.8393L103.079 22.8711Z" fill="black"/>
                            <path d="M13.2939 58.4812C13.2939 57.7308 13.312 56.9855 13.3482 56.2444L0.0723027 55.5859C0.027116 56.5464 1.60433e-05 57.5161 1.60433e-05 58.4947C-0.00563247 66.1412 1.48032 73.7133 4.37267 80.7769C7.265 87.8408 11.5068 94.2569 16.8547 99.6574L26.2716 90.1306C22.155 85.9808 18.8892 81.0482 16.6621 75.6167C14.4349 70.1853 13.2903 64.3617 13.2939 58.4812Z" fill="black"/>
                            <path d="M57.5453 13.6946C58.2863 13.6946 59.0226 13.722 59.7546 13.7586L60.4189 0.316692C59.4672 0.270955 58.5091 0.24809 57.5453 0.24809C49.9871 0.238761 42.5019 1.74062 35.519 4.66742C28.5361 7.59423 22.1932 11.8883 16.8545 17.3032L26.2714 26.8346C30.3716 22.6666 35.2453 19.3599 40.6125 17.1049C45.9796 14.8499 51.7339 13.6909 57.5453 13.6946Z" fill="black"/>
                            <path d="M57.5452 103.272C56.8043 103.272 56.0676 103.272 55.3313 103.213L54.667 116.65C55.6219 116.699 56.5814 116.723 57.5452 116.723C65.1003 116.731 72.5818 115.228 79.561 112.301C86.5402 109.373 92.879 105.078 98.2136 99.6635L88.8148 90.1367C84.7138 94.3026 79.8406 97.6073 74.4745 99.8615C69.1085 102.116 63.3552 103.275 57.5452 103.272Z" fill="black"/>
                            <path d="M82.489 21.5087L93.6772 13.1618C83.451 4.78044 70.6861 0.217945 57.5276 0.2413V13.6923C66.438 13.6812 75.1415 16.4067 82.489 21.5087Z" fill="black"/>
                            <path d="M115.087 58.482C115.094 54.9828 114.791 51.4896 114.183 48.0449L101.797 57.2836C101.797 57.6818 101.797 58.0796 101.797 58.482C101.8 64.74 100.504 70.9289 97.9932 76.6474C95.4818 82.3659 91.8113 87.4865 87.2197 91.6773L96.1533 101.671C102.123 96.2164 106.893 89.5531 110.154 82.1131C113.416 74.6728 115.097 66.6217 115.087 58.482Z" fill="black"/>
                            <path d="M57.5456 103.273C51.3623 103.275 45.2475 101.963 39.5969 99.4214C33.9466 96.8798 28.8865 93.1652 24.7445 88.5186L14.8757 97.5561C20.2641 103.599 26.8471 108.428 34.1979 111.73C41.5488 115.032 49.5032 116.734 57.5456 116.724V103.273Z" fill="black"/>
                            <path d="M27.8712 25.2864L18.9423 15.293C12.9712 20.7465 8.19929 27.4094 4.93602 34.8496C1.67279 42.2898 -0.00889671 50.3413 3.53954e-05 58.4817H13.294C13.2912 52.224 14.5875 46.0351 17.0986 40.3166C19.6098 34.5983 23.2799 29.4775 27.8712 25.2864Z" fill="black"/>
                            <path d="M332.074 33.5488L348.539 21.4102H293.435V94.3526H348.539V82.2141H309.158V63.5297H342.752V51.3912H309.158V33.5488H332.074Z" fill="black"/>
                            <path d="M256.358 49.8257H237.227V33.5437H267.759L284.214 21.3682H221.513V94.3107H254.334C272.735 94.3107 283.296 85.9648 283.296 71.4096C283.296 57.4851 273.73 49.8257 256.358 49.8257ZM253.626 82.1682H237.227V61.9568H253.626C263.579 61.9568 268.245 65.3439 268.245 72.0627C268.245 78.7812 263.28 82.1682 253.626 82.1682Z" fill="black"/>
                            <path d="M389.044 21.3994H359.05V94.3416H374.771V73.6784H389.044C408.182 73.6784 420.02 63.6014 420.02 47.4999C420.02 31.399 408.182 21.3994 389.044 21.3994ZM388.713 61.5305H374.771V33.5473H388.713C398.779 33.5473 404.334 38.5194 404.334 47.5444C404.334 56.5695 398.779 61.5305 388.713 61.5305Z" fill="black"/>
                            <path d="M197.92 77.1268C193.859 79.3276 189.308 80.4671 184.69 80.4401C170.868 80.4401 160.841 70.5653 160.841 56.9678C160.841 43.3698 170.868 33.4737 184.69 33.4737C189.675 33.389 194.556 34.9015 198.621 37.7906L209.618 29.6857L208.874 29.1569C202.459 23.5128 193.887 20.5234 184.076 20.5234C173.434 20.5234 163.785 24.1063 156.895 30.6246C153.411 33.9808 150.656 38.0196 148.801 42.4888C146.946 46.9581 146.031 51.7617 146.113 56.6006C146.039 61.4887 146.95 66.3414 148.792 70.8695C150.633 75.3975 153.367 79.5074 156.83 82.9546C163.752 89.7319 173.38 93.4657 183.947 93.4657C194.987 93.4657 204.637 89.6129 211.171 82.5985L201.327 75.26L197.92 77.1268Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_241_31">
                                <rect width="420" height="117.518" fill="white" transform="translate(0 0.241211)"/>
                            </clipPath>
                        </defs>
                    </svg>

                    </div>
                    <div className={this.state.classy}>
                        <svg width="420" height="118" viewBox="0 0 420 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_241_31)">
                            <path d="M103.079 22.8711C105.812 26.4481 108.126 30.3343 109.974 34.4515L57.5575 73.5608L35.6511 59.6616V42.9401L57.5575 56.8393L103.079 22.8711Z" fill="black"/>
                            <path d="M13.2939 58.4812C13.2939 57.7308 13.312 56.9855 13.3482 56.2444L0.0723027 55.5859C0.027116 56.5464 1.60433e-05 57.5161 1.60433e-05 58.4947C-0.00563247 66.1412 1.48032 73.7133 4.37267 80.7769C7.265 87.8408 11.5068 94.2569 16.8547 99.6574L26.2716 90.1306C22.155 85.9808 18.8892 81.0482 16.6621 75.6167C14.4349 70.1853 13.2903 64.3617 13.2939 58.4812Z" fill="black"/>
                            <path d="M57.5453 13.6946C58.2863 13.6946 59.0226 13.722 59.7546 13.7586L60.4189 0.316692C59.4672 0.270955 58.5091 0.24809 57.5453 0.24809C49.9871 0.238761 42.5019 1.74062 35.519 4.66742C28.5361 7.59423 22.1932 11.8883 16.8545 17.3032L26.2714 26.8346C30.3716 22.6666 35.2453 19.3599 40.6125 17.1049C45.9796 14.8499 51.7339 13.6909 57.5453 13.6946Z" fill="black"/>
                            <path d="M57.5452 103.272C56.8043 103.272 56.0676 103.272 55.3313 103.213L54.667 116.65C55.6219 116.699 56.5814 116.723 57.5452 116.723C65.1003 116.731 72.5818 115.228 79.561 112.301C86.5402 109.373 92.879 105.078 98.2136 99.6635L88.8148 90.1367C84.7138 94.3026 79.8406 97.6073 74.4745 99.8615C69.1085 102.116 63.3552 103.275 57.5452 103.272Z" fill="black"/>
                            <path d="M82.489 21.5087L93.6772 13.1618C83.451 4.78044 70.6861 0.217945 57.5276 0.2413V13.6923C66.438 13.6812 75.1415 16.4067 82.489 21.5087Z" fill="black"/>
                            <path d="M115.087 58.482C115.094 54.9828 114.791 51.4896 114.183 48.0449L101.797 57.2836C101.797 57.6818 101.797 58.0796 101.797 58.482C101.8 64.74 100.504 70.9289 97.9932 76.6474C95.4818 82.3659 91.8113 87.4865 87.2197 91.6773L96.1533 101.671C102.123 96.2164 106.893 89.5531 110.154 82.1131C113.416 74.6728 115.097 66.6217 115.087 58.482Z" fill="black"/>
                            <path d="M57.5456 103.273C51.3623 103.275 45.2475 101.963 39.5969 99.4214C33.9466 96.8798 28.8865 93.1652 24.7445 88.5186L14.8757 97.5561C20.2641 103.599 26.8471 108.428 34.1979 111.73C41.5488 115.032 49.5032 116.734 57.5456 116.724V103.273Z" fill="black"/>
                            <path d="M27.8712 25.2864L18.9423 15.293C12.9712 20.7465 8.19929 27.4094 4.93602 34.8496C1.67279 42.2898 -0.00889671 50.3413 3.53954e-05 58.4817H13.294C13.2912 52.224 14.5875 46.0351 17.0986 40.3166C19.6098 34.5983 23.2799 29.4775 27.8712 25.2864Z" fill="black"/>
                            <path d="M332.074 33.5488L348.539 21.4102H293.435V94.3526H348.539V82.2141H309.158V63.5297H342.752V51.3912H309.158V33.5488H332.074Z" fill="black"/>
                            <path d="M256.358 49.8257H237.227V33.5437H267.759L284.214 21.3682H221.513V94.3107H254.334C272.735 94.3107 283.296 85.9648 283.296 71.4096C283.296 57.4851 273.73 49.8257 256.358 49.8257ZM253.626 82.1682H237.227V61.9568H253.626C263.579 61.9568 268.245 65.3439 268.245 72.0627C268.245 78.7812 263.28 82.1682 253.626 82.1682Z" fill="black"/>
                            <path d="M389.044 21.3994H359.05V94.3416H374.771V73.6784H389.044C408.182 73.6784 420.02 63.6014 420.02 47.4999C420.02 31.399 408.182 21.3994 389.044 21.3994ZM388.713 61.5305H374.771V33.5473H388.713C398.779 33.5473 404.334 38.5194 404.334 47.5444C404.334 56.5695 398.779 61.5305 388.713 61.5305Z" fill="black"/>
                            <path d="M197.92 77.1268C193.859 79.3276 189.308 80.4671 184.69 80.4401C170.868 80.4401 160.841 70.5653 160.841 56.9678C160.841 43.3698 170.868 33.4737 184.69 33.4737C189.675 33.389 194.556 34.9015 198.621 37.7906L209.618 29.6857L208.874 29.1569C202.459 23.5128 193.887 20.5234 184.076 20.5234C173.434 20.5234 163.785 24.1063 156.895 30.6246C153.411 33.9808 150.656 38.0196 148.801 42.4888C146.946 46.9581 146.031 51.7617 146.113 56.6006C146.039 61.4887 146.95 66.3414 148.792 70.8695C150.633 75.3975 153.367 79.5074 156.83 82.9546C163.752 89.7319 173.38 93.4657 183.947 93.4657C194.987 93.4657 204.637 89.6129 211.171 82.5985L201.327 75.26L197.92 77.1268Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_241_31">
                                <rect width="420" height="117.518" fill="white" transform="translate(0 0.241211)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </div>
                </div>
            </div>
        )
    }
}