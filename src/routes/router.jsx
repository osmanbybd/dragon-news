import { createBrowserRouter } from "react-router";
import HomeLayOuts from "../layouts/HomeLayOuts";
import Home from "../pages/home/Home";
import CategoryNews from "../pages/categorynews/CategoryNews";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import AuthLogin from "../layouts/AuthLogin";
import NewsDetails from "../pages/NewsDetails";
import PrivateRout from "../provider/PrivateRout";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: HomeLayOuts,
        children:[
            {
                path: '/',
                Component: Home
            },
            {
                path: 'category/:id',
                Component: CategoryNews,
                loader: ()=> fetch('/news.json'),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path : 'auth',
        Component: AuthLogin,
        children: [
            {
                path: '/auth/login',
                Component : Login
            },
            {
                path: '/auth/register',
                Component: Register
            }

        ]
    },
    {
        path : '/news-details/:id',
       element:<PrivateRout><NewsDetails></NewsDetails></PrivateRout>,
        loader: () => fetch('/news.json')
    }
    

])