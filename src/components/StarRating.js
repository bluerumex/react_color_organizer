import React from 'react';
import Star from './Star';
import '../css/Rating.css'

// 표현 컴포넌트로 변경
const StarRating = ({ starsSelected=0, totalStars=5, onRate=f=>f}) =>
    <div className='star-rating'>
        {[...Array(totalStars)].map((n, i) => 
            <Star key={i} selected={i<starsSelected} onClick={() => onRate(i+1)} />
        )}
        <p>Rating: {starsSelected} / {totalStars}</p>
    </div>

export default StarRating;