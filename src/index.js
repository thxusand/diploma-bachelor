import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './styles/index.css';

import App from './app/App.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Home from './components/home/Home.jsx';
import Blog from './components/blog/Blog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error 404. Page not found.</div>,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <div>Error 404. Page not found.</div>,
  },
  {
    path: '/contacts',
    element: <Contacts />,
    errorElement: <div>Error 404. Page not found.</div>,
  },
  {
    path: '/blog',
    element: <Blog />,
    errorElement: <div>Error 404. Page not found.</div>,
  },
]);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
