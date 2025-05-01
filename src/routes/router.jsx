import { createBrowserRouter } from "react-router";
import Header from "../components/header/Header";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<Header></Header>
        },
        {
            path: "/auth",
            element: <h1>auth layout</h1>
        },
        {
            path: "/news",
            element: <h1>news layout</h1>
        },
        {
            path: "/*",
            element: <h1>error 404</h1>
        },
    ]
);



export default router