import React, { Component } from 'react';
// import { unmountComponentAtNode } from 'react-dom';
import { v4 } from 'uuid';
import ColorList from './component/ColorList';
import AddColorForm from './component/AddColorForm';
// import MemberList from './component/MemberList';
// import HiddenMessages from './component/HiddenMessages';
// import CountryList from './component/CountryList';
// import Timeline from './component/Timeline';
// import PeopleList from './component/PeopleList';
// import RandomMeUsers from './component/RandomMeUsers';
// import CountryDropDown from './component/CountryDropDown';
// import ExpandableHiddenMessage from './component/ExpandableHiddenMessage';
// import Clock from './component/Clock';
import './stylesheets/App.scss';
// import historicDatesForSkiing from './data/Skiing';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: [
                {
                    "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
                    "title": "바닷빛 파랑",
                    "color": "#0070ff",
                    "rating": 3,
                    "timestamp": "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
                },
                {
                    "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
                    "title": "토마토",
                    "color": "#d10012",
                    "rating": 2,
                    "timestamp": "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
                },
                {
                    "id": "58d9caee-6ea6-4d7b-9984-65b145031979",
                    "title": "잔디",
                    "color": "#67bf4f",
                    "rating": 1,
                    "timestamp": "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
                },
                {
                    "id": "a5685c39-6bdc-4727-9188-6c9a00bf7f95",
                    "title": "파티 핑크",
                    "color": "#ff00f7",
                    "rating": 5,
                    "timestamp": "Wed Mar 9 2016 03:26:00 GMT-0800 (PST)"
                }
            ],
            sort: "SORTED_BY_DATE"
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
                {/*
                <Timeline name='스키의 역사' data={historicDatesForSkiing} /> 
                <HiddenMessages />
                <MemberList count={1} />
                <CountryList />
                <PeopleList />
                <RandomMeUsers count={5} />
                <CountryDropDown selected='United States' />
                <ExpandableHiddenMessage hidden={true}>이 메시지는 처음에 숨겨져 있습니다.</ExpandableHiddenMessage>
                <Clock onClose={() => unmountComponentAtNode(document.getElementById('react-container'))} />
                */}
            </div>
        ) 
    }
}

export default App;
