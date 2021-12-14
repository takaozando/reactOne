import React from 'react';
import './Card.css'

const PromotionCard = ({promotion}) => (
    <div className="promotion-card">
       <img src={promotion.imageUrl} className="promotion-card_image" />
           <div className="promotion-card_info">
               <h1 className="promotion-card_title"> {promotion.title} </h1>
               <span className="promotion-card_price"> R$ {promotion.price} </span>
                <footer className="promotion-card_footer">
                    {promotion.comments.length > 0 && (
                        <div className="promotion-card_comment"> {promotion.comments[0].comment} </div>
                    )}
                    <div className="promotion-card_comments-count"> Comentários: {promotion.comments.length} </div>
                    <a href={promotion.url} target="_blank" className="promotion-card_link">IR PARA O SITE</a>
                </footer>
           </div>
    </div>
)

export default PromotionCard;