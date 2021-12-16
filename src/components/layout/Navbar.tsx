import { Link } from "react-router-dom";

interface NavbarProps {
	
}
 
const Navbar = () => {
	return ( 
		<nav className="nav-wrapper grey darken-3">
			<div className="container">
				<Link to='/' className='brand-logo'>Todo List</Link>
			</div>
		</nav>
	 )
}
 
export default Navbar;