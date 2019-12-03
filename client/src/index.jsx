import React from 'react';
import ReactDOM from 'react-dom';
import PriceAndDetails from './components/PriceAndDetails.jsx';
import axios from 'axios';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentItem: null,

        };
    }

    componentDidMount(){


    }

    render() {
        return (
           <div className={'buybox'}>
               <PriceAndDetails/>
           </div>
        );
    }
}

ReactDOM.render(<Cart/>, document.getElementById('cart'));
