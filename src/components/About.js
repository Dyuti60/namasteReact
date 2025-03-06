import User from './User'
const About = ()=>{
    const user ={
        name:'Dyuti Sunder Dutta',
        age:30,
        email:'dyuti@gmail.com'
    }
    return(
        <div className='about-us'>
            <h3>About</h3>
            <User user={user}/>
        </div>
    )
}
export default About
