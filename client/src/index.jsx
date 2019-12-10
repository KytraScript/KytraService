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

            allProducts: {},
            currentProduct: {},
            stock: [],
            otherSellers: sellers,

        };
    }

    componentDidMount() {
        axios.get('http://localhost:3070/dummy')
            .then( (data) => {
                console.log(data.data);
                this.setState({
                    allProducts: data.data,
                    currentProduct: data.data[2],
                });
            })
            .then( () => {
                this.populateQuantity();
            })
            .catch( err => {
                console.error(err);
            })
    }

    populateQuantity(){
        let sel = document.getElementById('quantity-selector');
        let opt = null;
        for(let i = 2; i < this.state.currentProduct.stock + 1; i++){
            opt = document.createElement('option');
            opt.value = `${i}`;
            opt.innerHTML = `${i}`;
            sel.appendChild(opt);
        }
    }

    render() {
        return (
            <div>
                <div className={'buybox'}>
                    <PriceAndDetails current={this.state.currentProduct}/>
                </div>
                <Social/>
                <OtherSellers sellers={this.state.otherSellers}/>
            </div>
        );
    }
}

ReactDOM.render(<Cart/>, document.getElementById('cart'));
