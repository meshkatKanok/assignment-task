import React from 'react';
import BillingCard from '../BiliingCard/BillingCard';
import './BulingandShipping.css'

const BulingandShipping = () => {
    return (
        <div>
            <div className='card'>
                <div>
                    <button className='top-btn' disabled>others details</button>
                    <button className='top-address'>Address</button>
                    <button className='top-contact' disabled>Contact person</button>
                </div>
               <BillingCard/>


            </div>

        </div>
    );
};

export default BulingandShipping;