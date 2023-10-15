import ContactForm from "../contact/ContactForm"
import Landing from "../packages/Landing";
import "./navbar.css"
import {Link} from"react-router-dom";



const Navbar = () => {
 
  return (
    <div className="navbar">
      <div className="navContainer">
      
        <span className="logo">Travelperk</span>
        <div className="navItems">
         
          <button className="navButton">Register</button>
          <Link to="/LoginForm"> <button className="navButton">Login</button></Link>
         <Link to="/ContactForm"> <button className="navButton">Contact</button></Link>
         <Link to="/ReviewForm"> <button className="navButton">Review</button></Link>
         <Link to="/Landing"> <button className="navButton">Packages</button></Link>

         
          
          
          
        </div>
      </div>
    </div>
  )
}

export default Navbar