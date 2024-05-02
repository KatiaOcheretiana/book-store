// import { configureStore } from "@reduxjs/toolkit";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
//   persistReducer,
//   persistStore,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { cartReducer } from "./cart/cartSlice";
// import { booksReducer } from "./books/booksSlice";

// const cartPersistConfig = {
//   key: "cart",
//   storage,
// };

// export const store = configureStore({
//   reducer: {
//     cart: persistReducer(cartPersistConfig, cartReducer),
//     books: booksReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./cart/cartSlice";
import { booksReducer } from "./books/booksSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const reducers = combineReducers({
  cart: persistReducer<any>(cartPersistConfig, cartReducer),
  books: booksReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
