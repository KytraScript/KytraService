import React from 'react';
import ReactDOM from 'react-dom';
import sellers from './data/sellers.js';
import Social from './components/Social.jsx';
import OtherSellers from './components/OtherSellers.jsx';
import PriceAndDetails from './components/PriceAndDetails.jsx';
import axios from 'axios';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentItem: {
                productKey: '1',
                name: 'Nestle Pure Life Purified Water, 16.9 fl oz. Plastic Bottles (12 count)',
                stock: 70,
                price: '$2.23'
            },

            otherSellers: sellers,

        };
    }

    componentDidMount() {


    }


    render() {
        return (
            <div>
                <div className={'buybox'}>
                    <PriceAndDetails/>
                </div>
                <Social/>
                <OtherSellers sellers={this.state.otherSellers}/>
            </div>
        );
    }
}

ReactDOM.render(<Cart/>, document.getElementById('cart'));
