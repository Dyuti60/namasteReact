// import { useRouteError } from "react-router"
const Error = (()=>{
    // const err = useRouteError()
    return(
        <div className="error-container">
            <h1>Oops!!!</h1>
            <h2>Something Went Wrong</h2>
            {/* <p>{"More Error Details: "+err.message}</p> */}
        </div>
    )
})
export default Error
