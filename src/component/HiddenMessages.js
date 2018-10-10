import React, { Component } from 'react';
import HiddenMessage from './HiddenMessage';

class HiddenMessages extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'The crow crows after midnight',
                'Jericho Jericho Go',
                '엄마가 섬그늘에..'
            ],
            showing: -1
        }
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => {
                let { showing, messages } = prevState;
                showing = (++showing >= messages.length) ? 0 : showing
                return {showing}
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { messages, showing } = this.state;
        return (
            <div className='hidden-messages'>
                {messages.map((message, i) => 
                    <HiddenMessage key={i} hide={(i !== showing)}>{message}</HiddenMessage>
                )}
            </div>
        );
    }
}

export default HiddenMessages;