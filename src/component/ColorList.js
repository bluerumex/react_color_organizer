import React from 'react';
import Color from './Color';

const ColorList = ({ colors=[] }) =>
    <div className="color-list">
        {(colors.length === 0) ? 
            <p>색이 없습니다. (색을추가해주세요)</p> :
            colors.map(color => 
                <Color key={color.id} {...color} />    
            )
        }
    </div>

export default ColorList;