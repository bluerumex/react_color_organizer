import React, { Component } from 'react';

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
                fetch(url)
                    .then(res => res.json())
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
                            <ComposedComponent {...this.state} {...this.props} />
                        }
                    </div>
                )
            }
        }
    )
}

export default DataComponent