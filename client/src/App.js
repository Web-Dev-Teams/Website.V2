import './App.css';
import Homepage from './pages/Homepage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DigiXplore from './pages/WhatWeDo/DigiXplore';
import Mainpage from './pages/WhatWeDo/Mainpage';
import Netritva from './pages/WhatWeDo/Netritva';
import Prayaas from './pages/WhatWeDo/Prayaas';
import Akshar from './pages/WhatWeDo/Akshar';
import ESafe from './pages/WhatWeDo/ESafe';
import Donation from './pages/Donation';
import Contactus from './pages/ContactUs/Contactus';
import FaqPage from './pages/ContactUs/FaqPage';
import Volunteers from './pages/Volunteers/Volunteers';
import { AboutUs } from './pages/About-us/AboutUs';
import Gallery from './pages/Media/Media';
import { Resources } from './pages/Resources/Resources';


function App() {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element: <Homepage/>
      },
      {
        path:'/whatwedo',
        element: <Mainpage/>,
      },
      {
        path:'/digiXplore',
         element: <DigiXplore/>
      },
      {
         path:'/netritva',
         element:<Netritva/>
      },
      {
         path:'/prayaas',
        element:<Prayaas/>
      },
      {
        path:'/eSafe',
        element:<ESafe/>
      },
      {
        path:'/akshar',
         element:<Akshar/>
      },
      {
        path:'/donation',
        element:<Donation/>
      },
      {
        path:'/volunteer',
        element:<Volunteers/>
      },
      {  
        path: '/faq',
        element: <FaqPage/>
      },
      {
        path: '/contactus',
        element: <Contactus/>
      } ,{
        path:'/aboutus',
        element:<AboutUs/>
      }  ,
      {
        path:'/media',
        element:<Gallery/>
      } ,
      {
        path:'/resources',
        element:<Resources/>
      }
    ]
  );



  return (
    <div>
          <RouterProvider router ={router}/>
    </div>

  );
}

export default App;
