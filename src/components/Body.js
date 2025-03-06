import RestaurantsCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState } from 'react'
const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState(resList)
    return(
        <div className='body'>
            <div className='search'>
                <input type='text' className='search-input-text' placeholder='Search Any Restaurant'/>
                <button className='filter-btn' onClick=
                {()=>{
                const filteredListOfRestaurants=listOfRestaurants.filter((res)=>{ return res.data.avgRating>4.5}) 
                setListOfRestaurants(filteredListOfRestaurants)
                }}>
                        Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    listOfRestaurants.map((restaurant)=>(
                        <RestaurantsCard key={restaurant.data.id} resData={restaurant}/>
                    ))
                }

            </div>
        </div>
    )
}
export default Body