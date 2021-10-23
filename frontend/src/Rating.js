import React from 'react'
import './Rating.css'
import { BsStarFill , BsStarHalf , BsStar } from "react-icons/bs";
import _ from 'lodash';

function Rating({rating,reviews,caption}) {
    
    return (
        <div className="rating">
            <span>
                { rating >=1 ? <BsStarFill/> : rating >= 0.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span>
                { rating >=2 ? <BsStarFill/> : rating >= 1.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span>
                { rating >=3 ? <BsStarFill/> : rating >= 2.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span>
                { rating >=4 ? <BsStarFill/> : rating >= 3.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            <span>
                { rating >=5 ? <BsStarFill/> : rating >= 4.5 ? <BsStarHalf/> : <BsStar/>}
            </span>
            {
                caption? 
                <span>
                    {caption}
                </span>:
                <span>
                    { !_.isUndefined(reviews) ?
                    `(${reviews})` :  `(${0})`}
                </span>
            }
        </div>
    )
}

export default Rating
