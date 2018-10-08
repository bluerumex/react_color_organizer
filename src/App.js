import React, { Component } from 'react';
import './App.css';
import ColorList from './component/ColorList';
import AddColorForm from './component/AddColorForm'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
    }

    render() {
        const { colors } = this.state;
        
        return (
            <div className="app">
                <AddColorForm />
                <ColorList colors={colors} />
            </div>
        )
    }
}

export default App;
