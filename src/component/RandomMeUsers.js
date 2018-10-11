import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

const PeopleList = ({data}) => {
    return (
        <ol className='people-list'>
            {data.results.map((person, i) => {
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
                this.setState({loading: true});
                fetch('https://randomuser.me/api/?results=10')
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

const Randomuser = DataComponent(
    PeopleList,
    'https://randomuser.me/api/'
);

export default Randomuser