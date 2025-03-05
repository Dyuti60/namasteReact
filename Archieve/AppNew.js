import React from 'react';
import ReactDOM from 'react-dom/client';

// Create React Element
const heading = React.createElement('h1',{id:"new head"},"Hello I'm Dyuti Sunder Dutta 🚀")
// Creates a React Object
// React.creatElement() => react object element => Rendered to html as html tag
const element = ReactDOM.createRoot(document.getElementById('parent'))
element.render(heading)

const jsxHeading = (<h1 id="heading" tabIndex="5" className='head'>heading using jsx</h1>)
console.log(jsxHeading)
element.render(jsxHeading) // will overwrite previous rendering

// React functional component
const TitleComponent = ()=> (<p>What is your Name?</p>)
const reactElem2 = <span>Sujaya Mahi & Bitan Mama</span>
const reactElem1 = <span>Anushree ❤ {reactElem2}</span>

const number = 10000
const HeadingComponent1 = () =>{
    return <div id="head1">
        {123+123}
        {TitleComponent()}
        <h1><em>{reactElem1}</em></h1>
        <TitleComponent/>
        {number/0}
        <TitleComponent></TitleComponent>
        <h3 className='heading1'>Dyuti Joyguru Functional Component 1 in child1</h3>
    </div>
}

const HeadingComponent2 = () => (
<div id="head2">
    <h3 className='heading2'>Dyuti Joyguru Functional Component 2 in child 2</h3>
</div>)



const childElement1 = ReactDOM.createRoot(document.getElementById('child1'))
const childElement2 = ReactDOM.createRoot(document.getElementById('child2'))
childElement1.render(<HeadingComponent1/>)
childElement2.render(<HeadingComponent2/>)