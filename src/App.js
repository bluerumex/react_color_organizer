import React, { Component } from 'react';
import { v4 } from 'uuid';
import './App.css';
import ColorList from './component/ColorList';
import AddColorForm from './component/AddColorForm'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
        this._addColor = this._addColor.bind(this);
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
        console.log(colors);
    }

    render() {
        const { _addColor } = this;
        const { colors } = this.state;
        
        return (
            <div className="app">
                <AddColorForm onNewColor={_addColor} />
                <ColorList colors={colors} />
            </div>
        )
    }
}

export default App;
