import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import RestaurantMenu from './RestaurantMenu';



const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet /> {/*Outlet route the children path to the AppLayout.*/}
    </div>
  )
}

const appRouter = createBrowserRouter([ 
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path:'/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurants/:resId',
        element: < RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
])

// console.log(AppLayout)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)