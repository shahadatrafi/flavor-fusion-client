import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";
import Secrete from "../Pages/Secrete/Secrete";
import Dashboard from "../Layouts/Main/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/our-menu',
                element: <Menu></Menu>
            },
            {
                path: '/our-shop',
                element: <Shop></Shop>
            },
            {
                path: '/our-shop/:category',
                element: <Shop></Shop>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <Registration></Registration>
            },
            {
                path: '/secrete',
                element: <PrivateRoute><Secrete></Secrete></PrivateRoute>
            }
        ],

    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'cart',
                element: <MyCart></MyCart>
            }
        ]
    }
]);

export default router;