Episode 1 - Inception
- document, createElement all these are understood by the browser as these are some special powers of browsers provided
- React is not understood by the browser
- We need to import from CDN
- What is CDN?
- Content Delivery Network
- This is the website where react has been hosted and we are just pulling react from there into our project
- CDN is a place where react library are hosted and we are just fetching react code from there into our project
- Put the two react script tags inside body tag in index.html file
- On doing this our project has react inside it
- What is the link "https://unpkg.com/react@18/umd/react.development.js" - JavaScript code for react (Fb developers wrote this)
- What is this link "https://unpkg.com/react-dom@18/umd/react-dom.development.js"
- Why are we writing crossorigin inside script tag?
- React is a JavaScript library used for builing User Interface
- As soon as we inject React into our project, open the index.html file -> Console -> React -> Enter
- The React console log - coming from the CDN injected link
- Gives a lot of important functions and methods to use
- First File - Core file of React Code
- Second File - React library that is useful for DOM operations or this is the react dom that we need to modify the DOM
- These two files are not clubbed together as React doesn't work only on browsers alone, works on mobile phone too as React Native.
- Second file is kind of a bridge between React and browsers
- Console log - ReactDOM - provides us lots of function and methods
- Creating a React App requires - createReact element, createRoot and render the React element into the root
- What is the empty object while creating a React Element ?
    React.createElement('h1',{},'Dyuti')
    tag, attribute and childen
    This is the place where we will give attribute to the tag
- React.CreateElement returns an object (React Element)
- ReactElement has props, props are attributes and children that we pass in
- In Root.render we are passing a react object element.
- The job of root.render function is to take the react object element and create the corresponding tag that the browser understands.
- For complex nesting of html tags - React code looks very ugly
- JSX makes life easy when we write tags
- The order of importing the React Script from CDN matters
- First import needs to be done, then the react code needs to be written, if not will throw ReferenceError: React is not defined.
- Why crossorigin is only written in script tag when we are importing React code from CDn and not otherwise?
- What is the difference between React.production.js and React.development.js?
- root.render - what it is doing - putting the parent (React Element) in the root
- Suppose something already existed in the root tag, when we do root.render, the existing content will be replaced by the parent.
- React is only working inside the div id root
- React only works on the place where we make the root as
- That is React can work on a small section of a page also

Episode 2 - Igniting Our App