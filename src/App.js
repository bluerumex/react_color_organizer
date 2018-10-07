import React, { Component } from 'react';
import './App.css';
import AddColorForm from './component/AddColorForm'

const logColor = (title, color) =>
    console.log(`NEW COLOR: ${title} | ${color}`);
class App extends Component {
    render() {
        return <AddColorForm onNewColor={ (title, color) => {
            console.log(`TODO: NEW COLOR Information ${title} | ${color} put on list...`);
            console.log(`TODO: DISPLAY with NEW Color`);
        } }/> 
    }
}

export default App;
