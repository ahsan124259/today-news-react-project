import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";


  export const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"",
                element:<Home></Home>
            },
            {
                path:"/category/:id",
                loader:()=>fetch('../../public/demo-data/news.json'),
                element:<CategoryNews></CategoryNews>
            },
            
            
        ]
    },
    {
        path:'/auth',
        element:<h2>Auth lay out </h2>
    },
    {
        path:'/news',
        element:<h2>News Data  </h2>
    },
    {
        path:'/*',
        element:<h2>Error  </h2>
    }
])