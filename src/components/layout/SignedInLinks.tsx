import { NavLink } from "react-router-dom";

interface SignedInLinksProps {
	
}
 
const SignedInLinks = () => {
	return ( 
		<ul className="right">
			<li><NavLink to='/'>New todo</NavLink></li>
			<li><NavLink to='/'> Log out</NavLink></li>
			<li><NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
		</ul>
	 )
}
 
export default SignedInLinks;