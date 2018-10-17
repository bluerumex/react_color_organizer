/* 
import React from 'react';
import ReactDOM from 'react-dom';
import Dispatcher from 'flux';
import { EventEmitter } from 'events';

const Countdown = ({count, tick, reset}) => {
    if (count) {
        setTimeout(() => tick(), 1000)
    }

    return (count) ?
        <h1>{count}</h1> :
        <div onClick={() => reset(10)}>
            <span>축하합니다.!</span>
            <span>(처음부터 다시 시작하려면 클릭하세요)</span>
        </div>
}

const countdownAction = dispatcher => 
    ({
        tick(currentCount) {
            dispatcher.handleAction({ type: 'TICK'})
        },
        reset(count) {
            dispatcher.handleAction({
                type: 'RESET',
                count
            })
        }
    })

class CountdownDispatcher extends Dispatcher {
    handleAction(action) {
        console.log('dispatching action:', action);
        this.dispatcher({
            source: 'VIEW_ACTION',
            action
        })
    }
}

class CountdownStore extends EventEmitter {
    constructor(count=5, dispatcher) {
        super();
        this._count = count;
        this.dispatcherIndex = dispatcher.register(
            this.dispatcher.bind(this)
        );
    }

    get _count() {
        return this._count;
    }

    dispatch(payload) {
        const { type, count } = payload.action;
        switch(type) {
            case 'TICK':
                this._count = this._count - 1;
                this.emit('TICK', this._count);
                return true;
                
            case 'RESET':
                this._count = this._count;
                this.emit('RESET', this._count);
                return true;

            default: 
                return false;
        }
    }
}

const appDispatcher = new CountdownDispatcher();
const actions = countdownAction(appDispatcher);
const store = new CountdownStore(10, appDispatcher);

const render = count => ReactDOM.render(
    <Countdown count={count} {...actions} />,
    document.getElementById('react-container')
);

store.on('TICK', () => render(store.count));
store.on('RESET', () => render(store.count));
render(store.count);

export default Countdown;
*/