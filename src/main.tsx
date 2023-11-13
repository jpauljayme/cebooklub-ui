import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.tsx';
import Book from './components/Book/Book.tsx';

import { store } from './app/store'
import { Provider } from 'react-redux'
import Books from './components/Book/Books.tsx';
import { MantineProvider } from '@mantine/core';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/books",
    // element: <Books/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
    </Provider>
    
  </React.StrictMode>,
);