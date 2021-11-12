import React from 'react';
import ClientCard from './ClientCard'
import FormCard from './FormCard'



export default class FoodCards extends React.Component<{}, {client: boolean}> {
    constructor(props: any) {
        super(props);
        this.state = {
            client: true,

        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
    }
    handleNext() {
        if (this.state.client) {
            this.setState({client: false});
        }
    }
    handlePrevious() {
        if (!this.state.client) {
            this.setState({client: true});
        }
    }

    render() {

        return (
            <div className="food-pieces_cards">
                <div className="product_cards_pointers">
                    <svg onClick={this.handleNext} className="product_cards_left_pointer" width="27" height="46" viewBox="0 0 27 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.014 39.6027C26.2876 40.8365 26.3364 42.8864 25.123 44.1814C23.9097 45.4763 21.8935 45.526 20.6199 44.2923C20.6199 44.2923 0.965745 24.9587 0.912138 24.9025C-0.3439 23.5665 -0.296923 21.4482 1.01706 20.1711L20.6197 0.897743C21.8913 -0.33815 23.9075 -0.291924 25.123 1.00099C26.3386 2.2939 26.2931 4.3439 25.0215 5.5798L8.36689 22.2377C8.17171 22.433 8.17167 22.7494 8.36681 22.9447L25.014 39.6027Z" fill="#DFDFDF"/>
                    </svg>
                    <svg onClick={this.handlePrevious} className="product_cards_right_pointer" width="27" height="46" viewBox="0 0 27 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.014 39.6027C26.2876 40.8365 26.3364 42.8864 25.123 44.1814C23.9097 45.4763 21.8935 45.526 20.6199 44.2923C20.6199 44.2923 0.965745 24.9587 0.912138 24.9025C-0.3439 23.5665 -0.296923 21.4482 1.01706 20.1711L20.6197 0.897741C21.8913 -0.338152 23.9075 -0.291925 25.123 1.00099C26.3386 2.2939 26.2931 4.3439 25.0215 5.57979L8.36689 22.2377C8.17171 22.433 8.17167 22.7494 8.36681 22.9447L25.014 39.6027Z" fill="#DFDFDF"/>
                    </svg>

                </div>

                <ClientCard classy={this.state.client ? "food-pieces_client previous-first" : "food-pieces_client next-first"}/>
                <FormCard classy={this.state.client ? "previous-second" : "next-second"}/>

            </div>
        )
    }
}