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

/* 
class StarRating extends Component {

    static propTypes = {
        totalStars: PropTypes.number
    }

    static defaultProps = {
        totalStars: 5
    }
    
    constructor(props) {
        super(props);
        this.state = {
            starsSelected: 0
        }
        this._change = this._change.bind(this);
    }

    _change(starsSelected) {
        this.setState({ starsSelected });
    }

    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;

        return (
            <div className='star-rating'>
                {[...Array(totalStars)].map((n, i) => 
                    <Star key={i} selected={i<starsSelected} onClick={() => this._change(i+1)} />
                )}
                <p>Rating: {starsSelected} / {totalStars}</p>
            </div>
        )
    };
};
*/

export default StarRating;