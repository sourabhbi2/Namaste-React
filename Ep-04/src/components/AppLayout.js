import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';




/* const styleCard = {
    backgroundColor: '#f0f0f0'
}  we can add css like this */


// HW - config driven api ?


const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

// console.log(AppLayout)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)