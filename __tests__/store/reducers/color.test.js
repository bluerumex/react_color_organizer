import C from'../../../src/component/constant'
import { color } from '../../../src/store/color_reducers'

describe("color 리듀서", () => {
    it("ADD_COLOR 성공", () => {
        const state = {};
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: new Date().toString()
        }
        const results = color(state, action)
        
        expect(results)
            .toEquals({
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: action.timestamp,
                rating: 0
            })
    });
    
    it("RATE_COLOR 성공", () => {
        const state = {
            id: 0,
            title: 'Test Teal',
            color: '#90C3D4',
            timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
            rating: undefined
        }
        const action = {
            type: C.RATE_COLOR,
            id: 0,
            rating: 3
        }
        const results = color(state, action);
        expect(results)
            .toEquals({
                id: 0,
                title: 'Test Teal',
                color: '#90C3D4',
                timestamp: 'Sat Mar 12 2016 16:12:09 GMT-0800 (PST)',
                rating: 3
            })
    });
    
});