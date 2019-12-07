import React from 'react';

const OtherSellers = (props) => {

    //logic for OtherSellers
    //will require mapping over list of other sellers to create divs
    return (
        <div className={'other-sellers'}>
            <div id={'other-label'}><b>Other Sellers on Gammazon</b></div>
            <div className={'seller-K'}>
                <div className={'other-price-row'}>
                    <div id={'other-price'} className={'red-K'}>$697.99</div>
                    <button id={'other-add-cart'}>Add to Cart</button>
                </div>
                <div className={'other-product-details'}>+ Free Shipping
                    Sold by: <a href="#">Electronic Express</a></div>
            </div>
        </div>
    )

};

export default OtherSellers;