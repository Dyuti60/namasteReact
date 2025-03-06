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
- We need to do a lot of processing in the local before moving the code into production 
- bundling and compressing code
- React is making our app fasst, but there are lots of other packages that helps to do so
- npm - mananges packages but does'nt stands for Node Package Manager
- Is is the standard repository for all the packages
- All the libraries, all the packages comes from npm
- it just manages for us
- Add npm into our project using command npm init
- On initializing npm we get package.json file
- This file is basically a configuration file for our npm
- packages are dependencies
- version of packages are taken care by npm in package.json file
- Most important package in our project is a bundler
- Webpack, parcel are bundlers
- Bundler basically bundles our app properly - minify, compress
- create React App uses webpack behind the scenes
- How to install packages from npm in our project - npm install -D parcel
- On doing so node_modules folder gets created, package-lock.json and package.json file gets updated.
- There are two types of installing packages from npm into our project -> Development Dependency and normal Dependency
- When we write '-D' then it means the package is meant only to be used in development environment not production but in case of normal installations it is meant for global use
- In package.json - parcel comes under devDependencies
- Difference between tilde and carat in package.json?
- If we have carat in the dependencies, next time if we have higher version of the package available will upgrade to the latest version available.
- carat - in case of minor versions and tilde - in case of major version
- It is always safe to have carat
- package.json is a configuration for npm, that keeps a track of what version of the package being installed in our system
- package-lock.json keeps the exact track of the version of the dependency that got installed.
- integrity field in package-lock.json - to maintain integrity
- What is node_modules?
- It contains all the codes that we fetched from npm
- Database of all the packages as mentioned in package.json and their dependent pakages.
- What is Transitive Dependency?
- In a project there are many package.json file, every dependency has its own package.json file.
- Should I put node_modules to git hub?
- Put inside gitignore as this folders are regenerated using package.json and package-lock.json
- npm install
- npx parcel index.html
  parcel will create a server for us and host in port 1234
- npm install means installing or downloading package from npm to node_module folder but npbx means executing the package
- on running the npx command, parcel builds a development build for our app and host in port 1234
- Another way to get React into our app is via npm install
- CDN is not a proper way to have React and React DOM into our project
- If we have react already in our node_modules folder, it will be very easy to use.
- The link we will have to keep on changing if a new version of react comes
- It will be very easy to manage React as one of the dependency managed by package.json file
- we need React as normal dependency - so use command npm install react
- now install react-dom
- Now if we remove the CDN link, will our app work now? - Reference Error: React is not defined comes
- No we need to import the packages into our project
- Getting below error on importing - @parcel/transformer-js: Browser scripts cannot have imports or exports.
- Script treats app.js as browser script - normal javaScript, but normal javaScript doesn't have import.
- We need to tell explicitly that the script type is a module
- import React from 'react'
    import ReactDOM from 'react-dom/client'
- What Parcel is doing?
    Zero Config Tool
    Dev Build
    Local Server
    Host Build into Server
    Change in file reflects in server hosted - due to HMR Hot Module Replacement
    File Watching Algorithm - written in C++
    Every build reduces the time - parcel is caching things for us and gives faster development things
    Where Parcel caches things - .parcel-cache in binary code
    Image Optimization
    Minification and Bundling of files for production
    Compress file
    Consistent Hashing
    Code Splitting
    Differential Bundling - When app is hosted can be hosted in different versions of browser - suppport older browsers; Generate nomodule fallback for older browsers version
    Diagnostic
    Better Error Suggestion
    Parcel gives feature to host on HTTPS
    Tree Shaking - Remove unused code for us, the code that we are not using in our app
    Parcel a budler also help makes app first along with React.
    Parcel has a lazy mode
    Different Dev and Prod bundles - take little more time for prod builds
    Optimization are more in production build than on dev builds.
In System Design Interview this will be helpful - what makes React as a whole so fast
- Parcel is also not doing everything on its own, it uses different libraries for doing different work
- How to create a prod build? - npx parcel build index.html
    The only thing needed to create prod build is the build keyword
- This throw error as in the package.json file we have defined the entry point as App.js but here in the command providing as index.html, so remove the line main from package.json
- When we run the build command, parcel will minify, optimize, compress the code and have it in the dist folder.
- The things that are hosted in the server are coming from the dist folder.
- When we excute the parcel build command, it generates the dev build or prod build of the project and host it into the server
- When the parcel generates the dev build it stores it in the dist folder.
- When we refresh the page or save file, uses the .parcel-cache and dist to update th page using HMR
- prod builds three main files - js, html and css
- parcel.cache and dist files are regeneratable and so need to be put in .gitignore
- Process: We push code from local to git, from git server fetches the code, the server will host app for the end users.
- All the commands will be executed in server also - npm install, server will have its own dist folder, .parcel-cache folder and node_modules folder
- Make browser compatible for different versions using browserlist, configur it in the package.json file.
- When we write "last 2 Chrome versions" - means our app will definitely work on last 2 Chrome versions and it might or might not work on other browers.
- What to write can be checked in browserlist.dev site
- It will write extra bundles extra code when we try to cover all the browserlist - support older browser versions
- "last 2 versions" - supports 79% of browser coverage
- in browserlist we can give company specific details also

Episode - 03 (Laying the foundation)
- Configure project commands in package.json file under scripts: 
- npm run start and npm start are both same
- npm run build is command to build production build
- React.createElement is a react object when rendered to dom creates a html element
- The html element where we want to render content is having something will get replaced with the new content and if not rendered successfully, will show the previous content
- React.createElement is very clumsy
- Core of react is React.createElement but it is inefficient to write this - its very hard to read and is not developer friendly
- To help developer community something called JSX was developed by facebook community.
- JSX is a javascript syntax which is easier to create react elements.
- JSX is not part of React, JSX and React are both different.
- Without JSX, a whole application can be created using React but, JSX makes developers life easy.
- Previously we used to write our markup in .html file and the logics in .js file
- the libraries, frameworks like react tries to merge these files up
- JSX is a convention that merge these .html and .js together.
- Create a heading element using JSX: 
    const jsxHeading = <h1> element created using jsx </h1>
- JSX is not html inside javascript, jsx is different than html
- JSX is a html like syntax or xml like syntax.
- When jsx code is executed becomes a react element
    const jsxHeading = <h1 id="heading">heading using html</h1>
- log jsxHeading - react element
- We are writing code for machine and human - firstly for developers who are going to go through it.
- Is JSX a valid JavaScript ? - It is not a pure javascript
- JS Engine won't understand JSX, it will understand ECMAScript
- If JS Engine can't read this JSX code, how the app is working?
    Parcel is doing the job behind the scenes, even before the whole code in App.js goes to the browser, it is transpiled and go to the JS Engine.
    And then JS Engine received the code, that the browser can understand.
    JSX code is basically getting transpiled before it reaches the JS Engine.
    Transpiled means the code is converted into the code that browsers can understand.
    Transpile is being done by Parcel, but Parcel doesnt do this. Parcel is like a manager who manages so many packages.
    Parcel gives the responsiblity to transpile to a package called Babel
    While installing Parcel, a dependency package Babel gets installed.
    As soon as we save the file, babel converts the code quickly to a code that React will understand.
- Babel is a JavaScript compiler or transpiler.
- Babel takes the jsx code and converts into code that React will understand / JS Engine will understand
- Behind the scenes, JSX code is converted into React.createElement and then React.CreateElement is converted to React Element Object and then this is rendered into the DOM as a HTML element.
- JSX at the end behind the scenes is React.createElement.
- Babel is converting this JSX code into React.createElement.
- Babel does a lot of other things too, when older version of browser doesn;t undertand latest ECMAScipt, Babel converts that into older version.
- In JSX if we have to give class, we need to write className
- The className in JSX gets converted to class in HTML
- In JSX, the attributes follows camel casing syntax. Example tabIndex=1
- Single line and multiline code in JSX
    In order to write multiline JSX code, we need to wrap them up in simple bracket ().
- VS Code Extension: Prettier Code Formatter, Bracket pair colorizer, ES Lint, Better Comment
- What is React Components?
    Everything is a component in React
    Button, Header, Footer is a component
    There are two types of components in React:
    1. Class Based Components - old way of writing code - no one uses this - uses JS Class to create Component
    2. Functional Components - new way of writing code - uses JS Functions to create Component
- There are some legacy projects which has Class based components
- What is React Functional Components?
    It is just a normal JavaScript function which returns some JSX elements / returns a React Element
    While creating a React Functional Component name it with Capital Letter.
- If we have a single line of JSX element to be return, we need not enclose it within curly braces and use return keyword.
- If we have multiline of JSX code enclose it within simple bracket
- if we have used return keyword, use curly braces to enclose the JSX code.
- React Element is a variable having JSX Code -> JSX Code transpiled by Babel to create React Element
- What is differce between React Component and React Element?
- React element is rendered as root.render(ReactElement) but React Component can't be rendered like this
- React Components are rendered like <ReactComponent/>
- This is the syntax which Babel understands, by the syntax, babel understands it's a React Component.
- How to render a component inside another component - component Composition 
- A normal function or an arrow function can be used as a React Functional component.
- In a React functional Component, insert curly braces {}, can run any piece of JavaSript code.
- Even console.log also works if put inside curly braces.
- How to Put React element inside React Functional Component?
    React Element is stored in a JavaScript Variable and so can be used inside React Functional Component using curly braces.
- How to put React Element inside React Element - using curly braces
- We can put a React component inside a React Element
- Whenever some data is enclosed in curly braces, jsx won't blindly run it, sanitize the data and pass it, avoids cross Site Scripting attacks.
- Rendering React Functional Components two ways:
    1. <ReactComponent>
    2. <ReactComponent></ReactComponent>
- There is not limit to render React Functional Components
- React Functional Component is a normal function and can be invoked inside a React Functional Component when enclosed in curly braces as javascript code.

Episode - 04 (Talk is Cheap Show me the Code)
- Plan first
- Build Food Ordering App
- Give a Name
- How the App will look like - Basic UI
- Have a Header - Logo, build some link on right side - Home, Logo, About, Cart  
- Below the header will have a Search bar in the body
- In the body will have a search bar, restaurant cart ()
- In the Footer will have copyright and contact us
- While building an app, first plan the wireframe or mock, and then work on code build
- Now we can work on the components App can have
  1. Header Component - Logo, Nav items components
  2. Body Component - search input bar, Restarurant containers (Restaurant Card)
  3. Footer Component - Copyright, Contact us, About us
- Restaurant Card
  Name, img, Star Rating, Cuisine, delivery time etc.
- Inline CSS styles are given in React Functional Component as JavaScript Objects
- It is not advised to use inline CSS styles
- {{}} - the first curly braces says inside will have JavaScript code, the second curly braces is for JavaScript Objects.
- Props in React
- Props is a short form for Properties, properties are something that can be passed to React Components
- Dynamically pass data to a component - this is possible using props
- props are arguments to a function and Component are the functions
- passing props to a component is what is said.
- destructuring props on the fly
- json viewer chrome extension
- What is config driven UI?
    Website driven by data configs
    Delhi people getting delhi data locationwise
    Controlling UI, how it will look like using data configs
    That configs comes from backend
- When we build a large scale application, we store all our images in CDN
- Optional Chaining 
- To use loop use JavaScript map function
- There is a error "Each child in a list should have a unique "key" prop."
    Each of the list items should be uniquely represented.
    pass a unique value for key
- Whenever we are using map try to have a unique key for each element of the list.
- Why do we need Key?
    When there are components at the same level, these components should be uniquely represented, React tries to rerender the restaurant card when a new card is to be inserted as React doesnt able to identify cards uniquely.
    But if a unique id is being given to each restaurant card, React will only render the new card, as it identifies the other cards already present.
- People uses index as key also, this logically looks right as everytime there is a unique index for each restaurant card but React itself says not to use index as keys.
- Index as a key is anti pattern
- Keys are to be used - if unique id is not there then use index but it is not recommended

Episode - 05 ( Let's get hooked)
- Everything we do using React is possible using HTML, CSS and JavaScript
- The beauty of using any library or React is that it makes developer experience easy.
- Best Practice in Industry is to make separate files for separate components
- To know more about folder structure in a React Project go to File Structure in React Documentation
- When we create a js file for a React Component, try to have give the same name.
- Its debatable to write the component file as .js or .jsx or .tsx file
- We need to export and then import each component file
- Default Export and Import and Named Export
- Named Export - curly braces is required while importing
    Variable imported needs to be used within curly braces
    Component can be directly used
- Default Export - No curly braces needed while importing
    Variable imported needs to be used within curly braces
    Component can be directly used
- When we have to export multiple things use named export else use default export
- We can use Default Export along with Named Export
- How to make our App Dynamic?
    - objective is to filter out restaurants having rating >4.2
    - Add Event Listener onClick
    - onClick takes a callback function
    - Add Event Listener onMouseOver
- React is fast and efficient in DOM manipulation, Data is in sync with the UI
- State Variable - React Super Powerful Variable - for that we use hooks
- React Elemen is a JS object, React Component is a normal JS function, Hooks in React is a normal JS utility function
    - Has some feature given to Hooks
    - Two most important React Hooks are - useState() and useEffect()
    -  useState() - creates superpowerful State variables in React
                    first need to import this from React
                    need to import it like a named import
                    its called state variable, as it maintains the state of the component
                    the scope of a local state variable is inside the component
                    when we call useState(), it will give state variables in the form of arrays
                    values are to be passed in useState() to instantiate the state variable
                    if we want to modify the state variable need to provide a second parameter of the array
    - Whenever a state variable updates, React will rerenders the component
    - rerenders means updating the component whenever state variable update
    - useEffect() -
- Superpowers of React:
    - Reconcillation Algorithms as known as React fibre
    - Suppose we have a res-containers and is having 7 res-card
    - UI changes to filter only 4 res-cards
    - When UI changes, React creates a virtual DOM
    - Virtual DOM is representation of Actual DOM
    - Virtual DOM are React Element Objects
- Diff Algorithm: finds out difference between updated virtual DOM and old DOM
                  It calculates the difference and then actually updates the DOM for every render cycle
- In React 16, a new algorithm called React fibre came which finds out the difference and ipdate the DP
- Finds out the difference between two React Element Objects (virtual DOM) and update the Actual DOM
- React fibre is the ongoing reimplementation of React's core algorithm
- Incremental Rendering - the ability to split the rendering works into chunks and spread it out over multiple frames.
- Understand React Fibre Architecture Docuementation 

Episode -06 (Exploring the World)
- Monolith and Microservice Architecture
- Separation of concerns and single responsibility principle
- How do this individual services interact with each other?
    The services run on different ports and then these ports are map to the same domain name
- We can have different tech stack for different services.
- Get dynamic data from API / Backend
    Two Approaches
    1. As soon as our page loads ->Wait for page loads -> Call API -> Wait for API Response-> Render API Response data
    2. As soon as the page loads -> Wait for page loads -> Render the UI -> Call API -> Wait for API Response -> Render the Response in the UI already rendered. (Use this approach as this gives better user experience)
- useEffect() - comes from the React library, as named import.
                It is a utility function takes two arguments: callback function and dependency array
                This callback function will be called after the component is rendered
                If you have to do something after rendering the component, then will have to use useEffect
- useEffect() is useful when we go for second approach
- fetch() is a helper function provided by Browser that helps fetch data from the API
- Get Below Error : "https://www.swiggy.com/restaurants' from origin 'http://localhost:1234' has been blocked by CORS policy:"
    - which means our browser block us to call API from one origin to different origin
- What is CORS policy- get an understanding of the CORS policy
- How to bypass the CORS policy
- CORS Chrome Extension - Allow CORS- Access-Control-Allow-Origin
- Optional Chaining
- How we can improve the experience of having a blank page and the same getting rendered after sometime - we can have a spinning loader
- Is showing a spinner a good way - no its not
- Shimmer UI - We load fake page untill we get the actual data rendered - makes a fake impression that something is going to get render
- Conditional Rendering
- Can use ternary operator using shimmer
- when we can use constant variables, why do we use state variables?
    Create a button login - on clicking which change to logout
    use let variable initialize to login and change it to logout when clicked - event listener
    let variable gets updated but the component UI doesn't change with that data.
    There should be someway that the header component can refresh and have the latest change in data.
    This is where JS Variables doesn't work
    - Here is where local state variable comes into picture
- Search Text and Search Button
- onChange
- When we enter any character in search input text, the body component gets rerendered - reconcillation cycle begins each time
- two list - to accommodate filteredList change on filtering rendered data on UI
- json viewer chrome extension
- What is Optional Chaining?
- corsproxy.io
- What is CORS?
https://corsproxy.io?
paste it before API,not directly goinging to Swiggy -> internally goes to CORS redirects to API


-----------------------------------------------------------------------------------------
Episode - 07 (Finding the Path)
- 