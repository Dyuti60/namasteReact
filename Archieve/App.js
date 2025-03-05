// Creating a React element using core React components
const heading = React.createElement('h1',{id:"heading"},"Hi React, from Dyuti Sunder Dutta")
//  put react element into DOM / browser
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rendering the React element into the root div element
root.render(heading)
console.log(heading)
