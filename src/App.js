import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'


styleResCard = {
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px'
}


// Create a App Layout component
const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
//create a App Router component
const AppRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:[<Body/>,<About/>],

            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/contact',
                element:<Contact/>,
            }
        ]
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/contact',
        element:<Contact/>
    }
])
const rootLabelElement = ReactDOM.createRoot(document.getElementById('root-label'))
rootLabelElement.render(<RouterProvider router={AppRouter}/>)
// rootLabelElement.render(<AppLayout/>)