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
export default RestaurantsCard