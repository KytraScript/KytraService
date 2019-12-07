import React from 'react';

const PriceAndDetails = (props) => {

    function popOver(){

       let unveil = document.getElementById('promo-popover');

       if(unveil.classList.contains('hidden-div')){
               unveil.classList.remove('hidden-div');
       } else {
           unveil.classList.add('hidden-div');
       }
    }

    //logic with props for render
    return (
        <div className={'purchase-details-K'}>
            <div className={'pricing-details'}>
                <div id={'price-K'} className={'red-K'}>$29.95</div>
                <div id={'shipping-K'}>& <b>FREE Shipping.</b> <a href='#'>Details</a></div>
                <div id={'returns-K'}>& <a href='#'>FREE Returns.</a></div>
                <br/>
                <div id={'shipping-details-K'}><b>Want it Thursday, Dec. 5?</b> Order within <span
                    className={'green-K'}>11 hrs 39 mins</span> and
                    choose <b>Two-Day Shipping</b> at checkout.
                    <br/><a href='#'>Details</a>
                </div>
                <br/>
                <div id={'stock-K'}><span className={'green-K'}><b>In Stock.</b></span></div>
                <br/>
                <form id={'quantity-K'}>
                    <select>
                    </select>
                </form>
            </div>
            <br/>
            <button id={'btn-add-cart'} className={'btn'}>Add to Cart</button>
            <button id={'btn-buy-now'} className={'btn'}>Buy Now</button>
            <br/>
            <div className={'sold-by-K'}>Sold by <a href="#">Amazing Deals (We record SN)</a> and <a href="#">Fulfilled
                by Amazon</a>.
            </div>
            <br/>
            <div className={'paid-promo-K'}>
                <div id={'promo-img'} onMouseOver={popOver} onMouseOut={popOver}><div id={'promo-popover'} className={'hidden-div'}>
                    <span className={'promo-pointer'}></span>
                    <div className={'promo-popover-top'}></div><div className={'promo-popover-info'}><h2><b>Gammazon Primed Free Trial</b></h2>
                </div>
                </div>
                </div>
                <b>Enjoy fast, FREE delivery, exclusive deals and Award-Winning movies & TV shows with Prime
                </b><br/><a href="#">Click here</a> and start saving today with <b>Fast, FREE Delivery</b>
            </div>
            <br/>
            <div className={'pricing-details'}>
                <div className={'protection-plan'}><b>Add a Protection Plan</b>
                    <br/>
                    <input type="radio" id="two-year" name="protection"/>
                    <label htmlFor="protection">2-Year Protection for <span className={'red-K'}>$24.99</span></label>
                    <br/>
                    <input type="radio" id="three-year" name="protection"/>
                    <label htmlFor="protection">3-Year Protection for <span className={'red-K'}>$33.99</span></label>
                </div>
                <br/>
                <div>
                    <input type="checkbox" id="gift" name="gift"/>
                    <label htmlFor="gift">Add gift options</label>
                </div>
                <br/>
                <div className={'deliver-to'}>
                    <div id={'deliver-map'}></div>
                    <a href="#">Deliver to Round Rock 78681‌</a></div>
                <br/>
            </div>
            <button id={'btn-wishlist'} className={'btn'}>Add to List</button>
        </div>
    )
};

export default PriceAndDetails;