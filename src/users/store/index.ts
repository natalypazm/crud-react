import { configureStore } from "@reduxjs/toolkit"
import usersReducers from './slice'

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem('redux_state' , JSON.stringify(store.getState()));
}

export const store = configureStore({
    reducer: {
        users : usersReducers,
    },
    middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch