import { configureStore } from "@reduxjs/toolkit";
// import {
//     FLUSH,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//     REHYDRATE,
//     persistReducer,
//   persistStore,
// } from "redux-persist";
import { booksReducer } from "./books/booksSlice";
// import storage from "redux-persist/lib/storage";

// const  cartPersistConfig = {
//   key: "cart",
//   storage,
// };

export const store = configureStore({
  reducer: {
    // cart: persistReducer(cartPersistConfig, cartReducer),
    books: booksReducer,
  },
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }),
});

// export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
