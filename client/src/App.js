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
  const router = createBrowserRouter([
    {
      path: '/faq',
      element: <FaqPage />
    },
    {
      path: '/contactus',
      element: <Contactus />
    }
  ]);



  return (
    <div>
          <RouterProvider router ={router}/>
    </div>

  );
}

export default App;
