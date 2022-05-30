import {UserType} from "../HW8";

export type ActionType = { type: 'sort', payload: 'up' | 'down' } | {type: 'check', payload: number}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const sortState = [...state].sort( (a, b) => {
                if (a.name > b.name) {
                    return 1
                } else if (a.name < b.name) {
                    return -1
                } else {
                    return 0
                }
            } )
            return action.payload === 'up' ? sortState : sortState.reverse()
        }
        case 'check': {
            return state.filter( s => s.age > action.payload)
        }
        default:
            return state
    }
}