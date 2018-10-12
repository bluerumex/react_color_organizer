import React, { Component } from 'react';
import XRegExp from 'xregexp';

const Letter = XRegExp('\\pL', 'g');

const Expandable = ComposedComponent =>
    class Expandable extends Component {
        constructor(props) {
            super(props);
            const collapsed = 
            (props.hidden && props.hidden === true) ?
                true:
                false;
            this.state = {collapsed};
            this.expandCollapse = this.expandCollapse.bind(this);
        }
    
        expandCollapse() {
            let collapsed = !this.state.collapsed;
            this.setState({collapsed});
        }
        
        render() {
            return <ComposedComponent expandCollapse={this.expandCollapse} {...this.state} {...this.props} />
        }
    
    }

const showHiddenMessage = ({children, collapsed, expandCollapse}) => {
    return (
        <p onClick={expandCollapse}>
            {(collapsed) ?
                children.replace(Letter, 'x') :
                children
            }
        </p>
    )
}

const ExpandableHiddenMessage = Expandable(showHiddenMessage);

export default ExpandableHiddenMessage;