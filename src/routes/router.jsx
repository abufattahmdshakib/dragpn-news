import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../page/Home/Home";
import CategoryNews from "../page/Category/CategoryNews";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element:<Home></Home>
                },
                {
                    path:"/Category/:id",
                    element:<CategoryNews></CategoryNews>,
                    loader:() => fetch("/news.json")
                }
            ]
            
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