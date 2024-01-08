import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';




/* const styleCard = {
    backgroundColor: '#f0f0f0'
} */ //we can add css like this 


/* HW - config driven api ?

* Two types of Export/Import :-
  1} Default export/import :-
      * export default Component;
      * import Component from "path"
   
  2) Named Export/Import
      * export const Component;
      * import {Component} from "path";  
  
  Note:- it is important to know the use of {} while importing, because it use for named component.

  3) Can we use both named export and export default component in same file?
    ans- yes, we can use it as not more than one default export, but it can be have as many as named export as you need. 

*/

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