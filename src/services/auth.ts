import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export interface AuthState {
    authenticated: boolean
    loginPage: 'signUp' | 'signIn'
    authToken?: string
    username?: string
    password?: string
}

const initialState: AuthState = {
    authenticated: false,
    loginPage: 'signIn',
}

/**
 * authSlice maintains:
 * - username, password, authToken
 * - whether the user is logged in
 * - if not, what loginPage they should see
 */
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInFlowStarted: (state) => {
            state.loginPage = 'signIn'
        },
        signUpFlowStarted: (state) => {
            state.loginPage = 'signUp'
            console.log(state.loginPage)
        },
        signUpFlowCanceled: (state) => {
            state.loginPage = 'signIn'
        },

        /**
         * Sets the login credentials for future API requests
         * 
         * @param state 
         * @param message {username, token, password}, all strings
         */
        setCredentials: (state, message) => {
            state.authToken = message.payload.token
            state.username = message.payload.username
            state.password = message.payload.password
            state.authenticated = true
        }
    },
})

// export both the actions and selectors
export const {
        signInFlowStarted,
        signUpFlowCanceled,
        signUpFlowStarted,
        setCredentials
} = authSlice.actions