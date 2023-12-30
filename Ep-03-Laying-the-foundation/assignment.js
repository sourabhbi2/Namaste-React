import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from './logo.png';
import userIcon from './userIcon.png'

// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

/* const header = React.createElement(
    "div",
    {
        className: "title",
        key: 'title'
    },
    [
        React.createElement(
            'h1',
            {key: 'h1'},
            'This is an h1 tag.'
        ),
        React.createElement(
            'h2',
            {key: 'h2'},
            'This is an h2 tag.'
        ),
        React.createElement(
            'h3',
            {key: 'h3'},
            'This is an h3 tag.'
        )
    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(header); */

//  Q: Create the same element using JSX

/* const jsxHeader = (
   <div className='title' key='title'>
       <h1 className='h1'>This is an h1 tag from jsx.</h1>
       <h2 className='h2'>This is an h2 tag from jsx.</h2>
       <h3 className='h3'>This is an h3 tag from jsx.</h3>
    </div>
   
);  */

// Q: Create the same element using component

// const Heading = () => {
//     return (
//         <div className='title'>
//         <h1 className='h1'>This is an h1 tag from component</h1>
//         <h2 className='h2'>This is an h2 tag from component</h2>
//         <h3 className='h3'>This is an h3 tag from component</h3>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));

//  root.render(<Heading/>)


/* Q: Pass attribute into the tag in JSX
const Header = () => {
    return (
        <div className='title'>
            <h1 style={{ color: "blue" }}>This is an h1 tag with passing attribute.</h1>
            <h2 style={{ color: "gray" }}>This is an h2 tag with passing attribute.</h2>
            <h3 style={{ color: "red" }}>This is an h3 tag with passing attribute.</h3>
            <h4 style={{ color: "yellow" }}>This is an h4 tag with passing attribute.</h4>
            <h5 style={{ color: "purple" }}>This is an h5 tag with passing attribute.</h5>
            <h6 style={{ color: "orange" }}>This is an h6 tag with passing attribute.</h6>
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />); */

/* Q: Add component inside an another component

const Title = () =>{
    return (
        <div className='title'>
            <h1 style={{color: 'purple'}}>This is title component.</h1>
        </div>
    )
}

const Heading = () => {
    return (
        <div className='heading'>
            <Title/>
            <h1 style={{color: 'orange'}}>This is composing component.</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Heading />) */ 

/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/ 

const Header = () =>{
return(
    <>
    <header className="header">
        <div className="left">
          <img src={logo} alt="Logo" />
        </div>
        <div className="center">
          <input
            className="input"
            type="text"
            placeholder="Search anything you want..."
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="right">
          <img src={userIcon} alt="User Icon" />
        </div>
      </header>
      </>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />)