const User = (props)=>{
    const {name, age, email} = props.user
    return(
        <div className="user-profile">
            <h3><em>User Profile</em></h3>
            <p>{"User:  "+name}</p>
            <p>{"Age: "+age}</p>
            <p>{"EmailId: "+email}</p>
        </div>
    )
}
export default User
