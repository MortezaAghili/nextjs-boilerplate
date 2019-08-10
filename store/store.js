import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { reducer } from './reducers';
import { InitialState } from './state';

const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['count']
}

const persistedReducer = persistReducer(persistConfig, reducer)

export function initializeStore (initialState = InitialState) {
  return createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}
