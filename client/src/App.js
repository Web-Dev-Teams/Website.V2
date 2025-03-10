import './App.css';
import Homepage from './pages/Homepage';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DigiXplore from './pages/WhatWeDo/DigiXplore';
import Mainpage from './pages/WhatWeDo/Mainpage';
import Netritva from './pages/WhatWeDo/Netritva';
import Prayaas from './pages/WhatWeDo/Prayaas';
import Akshar from './pages/WhatWeDo/Akshar';
import ESafe from './pages/WhatWeDo/ESafe';

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
