import userReducer from './user.reducer.js';

describe('Testing userReducer', () => {

    test('Initial state should be an empty OBJECT...', () => {
        let action = {};
        let state = undefined;
        let returnedState = userReducer(state, action);
        expect (returnedState ).toEqual( {} );
    })

    test('Test clear/unset user (used on logout)...', () => {
        let action = {type: 'UNSET_USER'};
        let state = {username: 'jdoe', id: 0};
        let returnedState = userReducer(state, action);
        expect (returnedState ).toEqual( {} );
    })

    test('Test setting user (used after login)...', () => {
        let action = {type: 'SET_USER', payload: {username: 'jdoe', id: 0}};
        let state = {};
        let returnedState = userReducer(state, action);
        expect (returnedState ).toEqual( {username: 'jdoe', id: 0} );
    })

})