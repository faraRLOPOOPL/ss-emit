import React from 'react'
// let offset=0;
// const slider=document.getElementById('.PartnersDiscount');
// document.getElementsByClassName('.slideleft').addEventListener('click',function(){
//     offset+=500;
//     slider.style.left= -offset+'px';
// });
// document.getElementsByClassName('.slideright').addEventListener('click',ala = () => {
//     offset-=500;
//     slider.style.left= -offset+'px'
// });

export const PartnersDiscountCarousel = (props) => {
    return(
        <img className='DiscountImage' src={props.img} alt="" />
    )
};

export default PartnersDiscountCarousel;