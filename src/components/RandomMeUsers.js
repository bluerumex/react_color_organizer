import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

const PeopleList = ({data}) => {
    return (
        <ol className='people-list'>
            {data.map((person, i) => {
                const { first, last } = person.name;
                return <li key={i}>{first} {last}</li>
            })}
        </ol>
    )
}

const DataComponent = (ComposedComponent, url) => {
    return (
        class DataComponent extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    data: [],
                    loaded: false,
                    loading: false
                }
            }
        
            componentWillMount() {
                const { count } = this.props;
                this.setState({loading: true});
                fetch(`${url}/?results=${count}`)
                    .then(res => res.json())
                    .then(obj => obj.results)
                    .then(data => this.setState({
                        loaded: true,
                        loading: false,
                        data
                    }))
            }

            render() {
                return (
                    <div className='data-component'>
                        {(this.state.loading) ? 
                            <div>데이터 로딩 중....</div> :
                            <ComposedComponent {...this.state} />
                        }
                    </div>
                )
            }
        }
    )
}

const RandomMeUsers = DataComponent(
    PeopleList,
    'https://randomuser.me/api/',
);

export default RandomMeUsers