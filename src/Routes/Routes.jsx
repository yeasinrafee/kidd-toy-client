import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import AllToys from '../pages/AllToys/AllToys';
import MyToys from '../pages/MyToys/MyToys';
import AddAToy from '../pages/AddAToy/AddAToy';
import SingleToy from '../pages/SingleToy/SingleToy';
import UpdateToy from '../pages/UpdateToy/UpdateToy';
import PrivateRoute from './PrivateRoute';
import AboutUs from '../pages/AboutUs/AboutUs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>,
      },

      {
        path: 'allToys',
        element: <AllToys />,
      },
      {
        path: 'myToys',
        element: <MyToys />,
      },
      {
        path: 'addAToy',
        element: <AddAToy />,
      },
      {
        path: 'updateToy/:id',
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`https://assignment11-xi.vercel.app/alltoy/${params.id}`),
      },
      {
        path: '/toys/:id',
        element: (
          <PrivateRoute>
            <SingleToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment11-xi.vercel.app/toys/${params.id}`),
      },
    ],
  },
]);

export default router;
