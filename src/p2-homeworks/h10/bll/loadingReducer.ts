
export type StateType = {
    isLoading: boolean
}
export type ActionType = LoadingActionType

const initState = {
    isLoading: false
}

export const loadingReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export type LoadingActionType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean): any => ({ type: 'CHANGE-LOADING', isLoading} as const) // fix any