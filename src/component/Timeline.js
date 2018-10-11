import React, { Component } from 'react';
import * as d3 from "d3";
import { v4 } from 'uuid';

const Canvas = ({children}) => {
    return (
        <svg height='200' width='500'>
            {children}
        </svg>
    )
}

const TimelineDot = ({position, txt}) => {
    return (
        <g id={v4()} transform={`translate(${position}, 0)`}>
            <circle cy={160}
                    r={5}
                    style={{fill: 'blue'}} />
            <text y={115}
                  x={-95}
                  transform='rotate(-45)'
                  style={{fontSize: '10px'}}>{txt}</text>
        </g>
    )
}

class Timeline extends Component {

    constructor({data=[]}) {
        const times = d3.extent(data.map(d => d.year));
        const range = [10, 500];
        super({data});
        this.scale = d3.scaleTime().domain(times).range(range);
        this.state = {data, times, range};
    }

    render() {
        const { data } = this.state;
        const { scale } = this;
        return (
            <div className='timeline'>
                <h1>{this.props.name} Timeline</h1>
                <Canvas>
                    {data.map((d, i) =>
                        <TimelineDot position={scale(d.year)} txt={`${d.year} - ${d.event}`} />
                    )}
                </Canvas>
            </div>
        )
    }
}

export default Timeline;