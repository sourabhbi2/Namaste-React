/*
    I want to create nested element lke below.

    <div id="parent">
        <div id="child">
            <h1>"I'm an h1 tag"</h1>
            <h2>"I'm an h2 tag"</h2>
            </div>
        <div id="child2">
            <h1>"I'm an h1 tag"</h1>
            <h2>"I'm an h2 tag"</h2>
            </div>
            </div>

*/

    const parent = React.createElement(
        "div",
        {id: 'parent'},
        [React.createElement(
            'div',
            {id:'child'},
            [React.createElement(
                'h1',
                {id:"heading"},
                "I'm an h1 tag..!"
            ), React.createElement(
                'h2',
                {id:"heading"},
                "I'm an h2 tag..!"
            )]
        ), React.createElement('div', {id: "child2"},
         [React.createElement("h1", {id:'heading'}, "I'm h1 tag..!"),
         React.createElement("h2", {id:'heading'}, "I'm h2 tag..!"),
         ]) ]
    );

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(parent)



// const heading = React.createElement(
//     'h1', 
//     {id: "heading"},
//     'Hello world from React..!'
//     );

        // const root = ReactDOM.createRoot(document.getElementById('root'));

        // root.render(heading);
        
        //render() converting the object (i.e heading) into the document (i.e to root).