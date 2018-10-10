import React from 'react';
import propTypes from 'prop-types';
import '../stylesheets/Star.scss';

const Star = ({ selected=false, onClick=f=>f }) =>
    <div className={(selected) ? 'star selected' : 'star'} onClick={onClick}></div>

Star.propTypes = {
    selected: propTypes.bool,
    onClick: propTypes.func
}

export default Star;