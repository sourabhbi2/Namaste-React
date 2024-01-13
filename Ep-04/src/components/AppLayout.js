import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';



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
      }
    ],
    errorElement: <Error />
  },
  
])

// console.log(AppLayout)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)