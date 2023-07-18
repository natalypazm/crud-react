import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export type userId = number;

export interface User {
    name: string,
    email: string,
    github: string
}

export interface userWithId extends User {
    id: userId
}

const DEFAULT_STATE:userWithId[] = [
    {
      "id": 1,
      "name": "Nataly Paz",
      "github": "natalypazm",
      "email": "juan@example.com"
    },
    {
      "id": 2,
      "name": "María López",
      "github": "marialopez",
      "email": "maria@example.com"
    },
    {
      "id": 3,
      "name": "Pedro Ramirez",
      "github": "pedroramirez",
      "email": "pedro@example.com"
    },
    {
      "id": 4,
      "name": "Ana Garcia",
      "github": "anagarcia",
      "email": "ana@example.com"
    },
    {
      "id": 5,
      "name": "Carlos Martinez",
      "github": "carlosmartinez",
      "email": "carlos@example.com"
    },
    {
      "id": 6,
      "name": "Sofía Fernandez",
      "github": "sofiafernandez",
      "email": "sofia@example.com"
    },
    {
      "id": 7,
      "name": "Luis Torres",
      "github": "luistorres",
      "email": "luis@example.com"
    },
    {
      "id": 8,
      "name": "Laura Rodriguez",
      "github": "laurarodriguez",
      "email": "laura@example.com"
    },
    {
      "id": 9,
      "name": "Diego Castro",
      "github": "diegocastro",
      "email": "diego@example.com"
    },
    {
      "id": 10,
      "name": "Isabel Vargas",
      "github": "isabelvargas",
      "email": "isabel@example.com"
    }
];

const initialState: userWithId[] = (() => {
  const persistedState = localStorage.getItem('redux_state');
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      deleteUserById: (state, action: PayloadAction<userId>) => {
        const id = action.payload;
        return state.filter((user) => user.id !== id);
      }
    }
})

export default usersSlice.reducer
export const { deleteUserById } = usersSlice.actions