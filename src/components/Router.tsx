import React from 'react';
import {createBrowserRouter,RouterProvider, BrowserRouter, Route} from 'react-router-dom';
import StartPage from './StartPage';
import CreateTablePage from './CreateTablePage';
import TablePage from './TablePage';
import NotFoundPage from './NotFoundPage';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <StartPage/>
        },
        {
            path: "/create-table",
            element: <CreateTablePage/>
        },
        {
            path: "table/:id",
            element: <TablePage/>
        },
        {
            path: "*",
            element: <NotFoundPage/>
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Router;