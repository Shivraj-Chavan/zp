import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact ';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Home />
      },{
        path:'about',
        element:<About />
      },{
        path:'/contact',
        element:<Contact />
      }
    ]
  }
]);

export default routes;
