import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Login_Registration/Login";
import Registrar from "../Login_Registration/Registrar";
import ErrorPage from "../Login_Registration/ErrorPage";
import Services from "../Pages/AllServices/Services";




const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/serveces',
                element: <Services></Services>
            },


            // {
            //     path: '/update/:id',
            //     element: <UpdatePage></UpdatePage>,
            //     loader: ({ params }) => fetch(`https://assignment-server-site-10.vercel.app/all-reviews/${params.id}`)

            // },
            // {
            //     path: '/add-services',
            //     element: (<PrivetRoute><AddServices></AddServices></PrivetRoute>),
            // },

            {
                path: '/registrar',
                element: <Registrar></Registrar>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;