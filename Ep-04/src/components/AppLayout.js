import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import { RouterProvider, createBrowserRouter,  } from 'react-router-dom';
import About from './About';



const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const appRouter = createBrowserRouter([ 
  {
    path: '/',
    element: <AppLayout />
  },
  {
    path: '/about',
    element: <About />
  }
])

// console.log(AppLayout)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />)