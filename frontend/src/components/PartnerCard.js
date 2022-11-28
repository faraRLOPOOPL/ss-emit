import React from 'react'


export const PartnerCard = (props) => {

    return(
        <div className="partners_card">
            <a href={props.href}><img src={props.img} alt="" /></a>
            <span style={{display: (props.span ? 'inline-block' : 'none')}}>{props.span}</span>
        </div>
    )
}

export default PartnerCard;