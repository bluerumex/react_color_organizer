import React, { Component } from 'react';
import './App.css';
import AddColorForm from './component/AddColorForm'

const logColor = (title, color) =>
    console.log(`새로운 색: ${title} | ${color}`);
class App extends Component {
    render() {
        return <AddColorForm onNewColor={logColor}/> 
    }
}

export default App;
