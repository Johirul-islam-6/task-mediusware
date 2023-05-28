
import { RouterProvider } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import router from './routers/router';
import 'react-photo-view/dist/react-photo-view.css';

import { ToastContainer } from 'react-toastify';



function App() {


  return <RouterProvider router={router}></RouterProvider>;







}

export default App;
