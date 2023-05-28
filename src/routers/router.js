import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Login_Registration/Login";
import Registrar from "../Login_Registration/Registrar";
import ErrorPage from "../Login_Registration/ErrorPage";
import ProblemTwo from "../Pages/problem-1/ProblemTwo";
import Countrys from "../Pages/Countrys/Countrys";




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
                path: '/problem-2',
                element: <ProblemTwo></ProblemTwo>
            },


            {
                path: '/country/:id',
                element: <Countrys />,

            },

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