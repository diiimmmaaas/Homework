export type ThemeReducerActionType = ChangeThemeActionType

export type ThemeActionType = {
    themes: string[]
    currentTheme: string
}

const initState = {
    themes: ['dark', 'red', 'yellow', 'some'],
    currentTheme: 'red'
};

export const themeReducer = (state: ThemeActionType = initState, action: ThemeReducerActionType): ThemeActionType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                currentTheme: action.newTheme
            };
        }
        default: return state;
    }
};

export type ChangeThemeActionType = ReturnType<typeof changeThemeC>

export const changeThemeC = (newTheme: string) => ({type: "CHANGE-THEME", newTheme} as const); // fix any