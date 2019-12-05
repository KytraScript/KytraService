import React from 'react';
import ReactDOM from 'react-dom';
import Social from './components/Social.jsx';
import OtherSellers from './components/OtherSellers.jsx';
import PriceAndDetails from './components/PriceAndDetails.jsx';
import axios from 'axios';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentItem: null,

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
                <OtherSellers/>
            </div>
        );
    }
}

ReactDOM.render(<Cart/>, document.getElementById('cart'));
