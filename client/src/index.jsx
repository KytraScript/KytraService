import React from 'react';
import ReactDOM from 'react-dom';
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
           <div>BUY MY SHIT</div>
        );
    }
}

ReactDOM.render(<Cart/>, document.getElementById('cart'));
