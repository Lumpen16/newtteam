import React from 'react';

export default class AddonItem extends React.Component<{content: Array<any>}, {hidden: boolean, color: string, rotate: string}> {
    constructor(props: any) {
        super(props);
        this.state = {
            hidden: true,
            color: "rgb(236, 236, 236)",
            rotate: "rotate(0deg)"
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.state.hidden ? this.setState({hidden: false, color: "rgba(196, 196, 196, 1)", rotate: "rotate(-45deg)"}) : this.setState({hidden: true, color: "rgb(236, 236, 236)", rotate: "rotate(0deg)"})
    }
    render() {
        return(
            <>
                <div className={'food-addons_shit'}><h1 onClick={this.handleClick} className="food-addons_content_list_header" style={{backgroundColor: this.state.color, transition: "color 1s"}}>{this.props.content[0]}<div style={{ transition: "all 0.5s ease-out", float: "right", margin: "7px 8px 7px 0", width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "#FFFFFF", textAlign: "center", verticalAlign: "middle", display: "flex", alignItems: "center" }}><svg style={{transform: `${this.state.rotate}`, transition: "transform 0.3s ease-in-out"}} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00033 0.666992C8.6934 0.666992 9.26295 1.19578 9.32756 1.87192L9.33367 2.00033L9.33333 6.66633L14.0003 6.66699C14.7367 6.66699 15.3337 7.26395 15.3337 8.00033C15.3337 8.69339 14.8049 9.26295 14.1287 9.32756L14.0003 9.33366L9.33333 9.33333L9.33367 14.0003C9.33367 14.7367 8.73671 15.3337 8.00033 15.3337C7.30727 15.3337 6.73771 14.8049 6.6731 14.1287L6.667 14.0003L6.66633 9.33333L2.00033 9.33366C1.26395 9.33366 0.667 8.73671 0.667 8.00033C0.667 7.30726 1.19579 6.7377 1.87192 6.6731L2.00033 6.66699L6.66633 6.66633L6.667 2.00033C6.667 1.26395 7.26395 0.666992 8.00033 0.666992Z" fill="#5A97E5"/>
                </svg>

                </div></h1></div>
                <div className={"food-addons_content_list_item" + " " + (this.state.hidden ? "food-addons_content_list_item-hidden" : "food-addons_content_list_item-enabled")}>
                    <ul>
                        <li>{this.props.content[1]}</li>
                        <li>{this.props.content[2]}</li>
                    </ul>
                    <div className={"food-addons_item_footer"}>
                        <div className={"food-addons_item_footer-left"}>{this.props.content[3]}</div>
                        <div className={"food-addons_item_footer_price"}>{this.props.content[4]}</div>
                        <button>Узнать подробнее</button>
                    </div>
                </div>
            </>
        )
    }
}