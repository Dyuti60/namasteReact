import React from 'react'
import ReactDOM from 'react-dom/client'

// Create Header Component
const Header = ()=>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QzPz0fIwTdMKmlBt9_sMtOQRb_c1yT4CUg&s'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
// styleResCard = {
//     backgroundColor: '#f0f0f0',
//     borderRadius: '10px',
//     padding: '20px',
//     marginBottom: '20px'
// }
// const RestaurantsCard = ({resName,cuisine,ratings,address,priceRange})=>{
//     return(
//         <div className='res-card' style={styleResCard}>
//             <img className='res-image' alt='res-logo' src='https://img.clevup.in/268918/1666623916947_SKU-0001_0.jpeg?width=600&format=webp'/>
//             <h3 className='res-name'>{resName}</h3>
//             <p className='res-cuisine'>{cuisine}</p>
//             <p className='res-rating'>{ratings}</p>
//             <p className='res-address'>{address}</p>
//             <p className='res-price'>{priceRange}</p>
//         </div>
//     )
// }
const resList = [
    {
        data: {
        id: "255655",
        name: "Dyuti's Corner",
        cloudinaryImageId: "ac57cc371e73f96f812613f58457aca3",
        areaName: "Jorhat, Assam",
        costForTwo: "₹200 for two",
        cuisines: ["Puri Sabji", "Chole Kulche", "Paw Bhaji", "Dosa", "Chat"],
        avgRating: 4.8,
        veg: true,
        parentId: "54670",
        avgRatingString: "4",
        totalRatingsString: "20+",
        }
    },
    {
        data: {
        id: "255656",
        name: "Anushka's Corner",
        cloudinaryImageId: "ac57cc371e73f96f812613f58457aca3",
        areaName: "Goalpara Assam",
        costForTwo: "₹200 for two",
        cuisines: ["Bakery", "Hot-dog", "chicken tikka", "Cake", "Thick- shake"],
        avgRating: 4.3,
        veg: false,
        parentId: "54670",
        avgRatingString: "4",
        totalRatingsString: "20+",
        }
    }
]

const RestaurantsCard = (props)=>{
    const {resData} = props
    const {name,cuisines,avgRatingString,areaName,costForTwo} = resData?.data
    return(
        <div className='res-card' style={styleResCard}>
            <img className='res-image' alt='res-logo' src='https://img.clevup.in/268918/1666623916947_SKU-0001_0.jpeg?width=600&format=webp'/>
            <h3 className='res-name'><em>{name}</em></h3>
            <p className='res-cuisine'><em>Cuisines: </em> {cuisines.join(",  ")}</p>
            <p className='res-rating'><em>Ratings: </em> {avgRatingString}</p>
            <p className='res-address'><em>Address: </em> {areaName}</p>
            <p className='res-price'><em>Price Range: </em>{costForTwo}</p>
        </div>
    )
}
const Body = ()=>{
    return(
        <div className='body'>
            <div className='search'>
                <input type='text' className='search-input-text' placeholder='Search Any Restaurant'/>
                <button className='search-button'>Search</button>
            </div>
            <div className='res-container'>
                {/* <RestaurantsCard resData={resList[0]}/>
                <RestaurantsCard resData={resList[1]}/> */}
                {
                    resList.map((restaurant)=>(
                        <RestaurantsCard key={restaurant.data.id} resData={restaurant}/>
                    ))
                }

            </div>
        </div>
    )
}
const Footer = ()=>{

}

// Create a App Layout component
const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}
const rootLabelElement = ReactDOM.createRoot(document.getElementById('root-label'))
rootLabelElement.render(<AppLayout/>)