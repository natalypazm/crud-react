import { configureStore } from "@reduxjs/toolkit"
import usersReducers from './slice'


const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
    next(action);
    localStorage.setItem('redux_state' , JSON.stringify(store.getState()));
}

const syncWithDatabaseMiddleware = (store) => (next) => (action) => {
    const previosState = store.getState();
    next(action);

    if(type === 'users/deleteUserById'){
        const userToRemove = previosState.user.find(user => user.id === payload)
        fetch(`https://jsonplaceholder.typecode.com/users/${payload}`, {method: 'DELETE'})
        .then(res => {
            store.dispatch
        })
    }
}


export const store = configureStore({
    reducer: {
        users : usersReducers,
    },
    middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch