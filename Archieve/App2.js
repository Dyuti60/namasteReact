import React from 'react'
import ReactDOM from 'react-dom/client'
const parent = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{},'Hello, World! h1 🚀'),
        React.createElement('h2',{},'Hello, World! h2'),
    ]),
    React.createElement('div',{id:'child2'},[
        React.createElement('h3',{},'Hello, World! h3'),
        React.createElement('h4',{},'Hello, World! h4'),
    ]),
])
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
