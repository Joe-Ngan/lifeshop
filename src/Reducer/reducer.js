export const initState = {
    isError: false,
    errMsg: '',
    isLoading: false,
    isLoggedIn: false,
    username: '',
    status: {
        age: -1,
        health: -1,
        money: -1,
        happiness: -1,
        value: -1,
    },
    possessions: {
        possession: {
        }
    },
    market: {

    }
};

export function reducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload.username,
                status: action.payload.status,
                possessions: action.payload.possessions
            };
        case 'LOGOUT':
            return { ...state, isLoggedIn: false, username: '', status: {}, possessions: {} };
        case 'GROW':
            return {
                ...state, status: {
                    age: action.payload.age,
                    health: action.payload.health,
                    money: action.payload.money,
                    happiness: action.payload.happiness,
                    value: action.payload.value,
                }
            };
        case 'ADD':
        case 'GETMARKET':
            return { ...state, market: action.payload };
        case 'BUY':
            return {
                ...state,
                status: action.status,
                possessions: action.possessions,
                market: action.market,
            };
        case 'DELETE':
            return {
                ...state,
                possessions: action.possessions
            };
        case 'DELETEMARKETITEM':
            return { ...state, market: action.payload };
        case 'SEARCH':
            return { ...state, market: action.payload };
        case 'ERROR':
            return { ...state, isError: true, errMsg: action.payload };
        case 'UNERROR':
            return { ...state, isError: false, errMsg: '' };
        default:
            return state;
    }
}