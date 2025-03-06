import RestaurantsCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState,useEffect } from 'react'
import Shimmer from './Shimmer'
const Body = ()=>{
    const [listOfRestaurants,setListOfRestaurants] = useState([])
    const [dynamicFilteredRestaurants, setDynamicFilteredRestaurants] = useState([])
    const [searchText,setSearchText] = useState("")
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1157917&lng=91.7085933&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData=await data.json()
        setListOfRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setDynamicFilteredRestaurants(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    return listOfRestaurants.length==0?(<Shimmer />):(
        <div className='body'>
            <div className='search'>
                <input type='text' className='filter-input-text' placeholder='Search Any Restaurant' value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className='filter-btn' onClick={()=>{
                    console.log(searchText);
                    const filteredListOfRestaurants = listOfRestaurants.filter((res)=>{return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())})
                    setDynamicFilteredRestaurants(filteredListOfRestaurants)
                }}>Search</button>
                <button className='top-rated-res-btn' onClick={()=>{
                    const filteredListOfRestaurants=listOfRestaurants.filter((res)=>{
                        return res.info.avgRating>4.5}) 
                    setDynamicFilteredRestaurants(filteredListOfRestaurants)
                }}>
                        Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    dynamicFilteredRestaurants.map((restaurant)=>(
                        <RestaurantsCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }

            </div>
        </div>
    )
}
export default Body