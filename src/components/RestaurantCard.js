import { RES_IMAGE } from "../utils/constants"
const RestaurantsCard = (props)=>{
    const {resData} = props
    const {name,cuisines,avgRatingString,areaName,costForTwo,cloudinaryImageId} = resData?.info
    return(
        <div className='res-card' style={styleResCard}>
            <img className='res-image' alt='res-logo' src={RES_IMAGE+cloudinaryImageId}/>
            <h3 className='res-name'><em>{name}</em></h3>
            <p className='res-cuisine'><em>Cuisines: </em> {cuisines.join(",  ")}</p>
            <p className='res-rating'><em>Ratings: </em> {avgRatingString}</p>
            <p className='res-address'><em>Address: </em> {areaName}</p>
            <p className='res-price'><em>Price Range: </em>{costForTwo}</p>
        </div>
    )
}
export default RestaurantsCard