import C from './constant'

export const color = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_COLOR: 
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            }
        case C.RATE_COLOR:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    rating: action.rating
                }
        default:
            return state;
    }
}