// This is the Redux store configuration file
import { configureStore } from "@reduxjs/toolkit";

// Importing the article API slice
import { articleApi } from "./article";

// Creating the Redux store with the article API slice added
export const store = configureStore({
  reducer: {
    // Adding the articleApi reducer to the store under a specific namespace
    [articleApi.reducerPath]: articleApi.reducer,
  },
  // Adding middleware to the store to handle asynchronous actions from the articleApi
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});

// The store object is created using the configureStore function from Redux Toolkit. It configures the
// Redux store with the article API slice.
// The reducer object is passed to configureStore to define the reducers that should be included in the store.
// In this case, the articleApi.reducer is added to the store under the namespace specified
//  by articleApi.reducerPath.
// The middleware function is used to add middleware to the store. Here, the articleApi.middleware
//  is added to handle asynchronous actions from the article API slice.
// The getDefaultMiddleware function is used to get the default middleware provided by Redux Toolkit,
// and concat is used to add the articleApi.middleware to it.
// Overall, the store.js file configures the Redux store with the article API slice,
// allowing you to manage the API state in your application.
