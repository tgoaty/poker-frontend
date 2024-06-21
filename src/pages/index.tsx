import React, { lazy, Suspense} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Row, Spin} from "antd";
import Loader from "src/shared/ui/Loader";

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
        <Suspense fallback={<Loader/>}>
            <RouterProvider router={router} />
        </Suspense>

    );
};
