import { combineReducers , configureStore} from '@reduxjs/toolkit'
import AuthSlice from './slices/auth.slice'

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state')
        if(serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
        console.log("serializedState",serializedState)
    } catch(err) {
        return undefined
    }
}

const persistedState = loadState()

const rootReducer = combineReducers({
    auth: AuthSlice,
})

export const store = configureStore({
    preloadedState: persistedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false ,immutableCheck: false}),
})

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(err) {
        console.log(err)
    }
}

store.subscribe(() => {
    saveState(store.getState())
})

export default  store