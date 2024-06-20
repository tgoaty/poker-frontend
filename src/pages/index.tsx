import React, { lazy } from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const CreateTablePage = lazy(() => import("./create-table"));
const StartPage = lazy(() => import("./start"));
const TablePage = lazy(() => import("./table"));
const NotFoundPage = lazy(() => import("./not-found"));


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

export const Routing = () => {
    return (
        <RouterProvider router={router} />
    );
};
