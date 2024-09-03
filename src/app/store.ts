import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { api } from '../services/api'
import {authSlice} from "../services/auth";

/**
 * store allows any redux slices to be accessed app-wide
 */
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;