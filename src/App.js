import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

// Create Header Component

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
            <Body/>
            <Footer/>
        </div>
    )
}
const rootLabelElement = ReactDOM.createRoot(document.getElementById('root-label'))
rootLabelElement.render(<AppLayout/>)