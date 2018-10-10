import React, { Component } from 'react';
import StarRating from './StarRating';
import PropTypes from 'prop-types';
import '../stylesheets/Color.scss';

export default class Color extends Component {
    componentWillMount() {
        this.style = {backgroundColor: '#ccc'}
    }

    componentWillUpdate() {
        this.style = null;
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