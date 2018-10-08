import React, { Component } from 'react';
import './App.css';
import StarRating from './component/StarRating';

/* 
import AddColorForm from './component/AddColorForm'

const logColor = (title, color) =>
    console.log(`NEW COLOR: ${title} | ${color}`);

class App extends Component {
    render() {
        return <AddColorForm onNewColor={logColor}/> 
    }
}
*/
class App extends Component {
    render() {
        return <StarRating />
    }
}

export default App;
