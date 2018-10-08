import React from 'react';
import propTypes from 'prop-types';

const Star = ({ selected=false, onClick=f=>f }) =>
    <div className={(selected) ? 'star selected' : 'star'} onClick={onClick} ></div>

Star.propTypes = {
    selected: propTypes.bool,
    onClick: propTypes.func
}

export default Star;