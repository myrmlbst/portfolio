//import React from 'react';
//import ReactDOM from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import Header from "./app/Header.tsx";
import Overview from "./app/Overview.tsx";
import NotFound from "./app/NotFound.tsx";
import Stack from "./app/Stack.tsx";
import Experience from "./app/Experience.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>,
        errorElement: <NotFound></NotFound>,
    },
    {
        path: '/Overview',
        element: <Overview></Overview>
    },
    {
        path: '/Stack',
        element: <Stack></Stack>
    },
    {
        path: '/Experience',
        element: <Experience></Experience>
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
