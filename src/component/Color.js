import React, { Component } from 'react';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import '../stylesheets/Color.scss';

export default class Color extends Component {
    componentWillMount() {
        this.style = {backgroundColor: '#ccc'};
        console.log('componentWillMount()');
    }
    
    shouldComponentUpdate(nextProps) {
        const { rating } = this.props;
        
        console.log('shouldComponentUpdate()');
        return rating !== nextProps.rating;
    }
    
    componentWillUpdate(nextProps) {
        const { title, rating } = this.props;
        this.style = null;
        this._title.style.backgroundColor = 'red';
        this._title.style.color = 'white';
        console.log('componentWillUpdate()');
        alert(`${title}: 평점 ${rating} -> ${nextProps.rating}`);
    }
    
    componentDidUpdate(prevProps) {
        const { title, rating } = this.props;
        const status = (rating > prevProps.rating) ? '좋아짐' : '나빠짐';
        console.log(`${title} 평점이 ${status}`);
        this._title.style.backgroundColor = '';
        this._title.style.color = 'black';
        console.log('componentDidUpdate()');
    }

    render() {
        const { title, rating, color, onRate } = this.props;

        return (
            <section className='color' style={this.style}>
                <h1 ref={input => this._title = input}>{title}</h1>
                <div className='color' style={{backgroundColor: color}}></div>
                <StarRating starsSelected={rating} onRate={onRate} />
            </section>
        )
    }
}

Color.propsTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func
}

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: '#000000',
    onRate: f=>f
}