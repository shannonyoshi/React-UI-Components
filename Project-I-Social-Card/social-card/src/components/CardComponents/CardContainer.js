import React from 'react';
import './Card.css';

import HeaderContainer from '../HeaderComponents/HeaderContainer';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer=()=>{
    return(
        <div className='card-container'>
            <HeaderContainer />
            <div className='site-pre'>
            <CardBanner />
            <CardContent />
            </div>
        </div>
    )
}

export default CardContainer;