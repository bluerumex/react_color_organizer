import React, { Component } from 'react';
import { v4 } from 'uuid';
import ColorList from './component/ColorList';
import AddColorForm from './component/AddColorForm';
import MemberList from './component/MemberList';
import HiddenMessages from './component/HiddenMessages';
import './stylesheets/App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
        this._addColor = this._addColor.bind(this);
        this._rateColor = this._rateColor.bind(this);
        this._removeColor = this._removeColor.bind(this);
    }

    _addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ]
        this.setState({colors});
        // console.log(colors);
    }

    _rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ? 
                color : 
                {
                    ...color,
                    rating
                }    
        )
        this.setState({colors});
    }

    _removeColor(id) {
        const colors = this.state.colors.filter(
            color => color.id !== id
        )
        this.setState({colors});
    }

    render() {
        const { _addColor, _rateColor, _removeColor } = this;
        const { colors } = this.state;
        
        return (
            <div className="app">
                <AddColorForm onNewColor={_addColor} />
                <ColorList colors={colors} onRate={_rateColor} onRemove={_removeColor} />
                <HiddenMessages />
                <MemberList count={5} />
            </div>
        ) 
    }
}

export default App;
