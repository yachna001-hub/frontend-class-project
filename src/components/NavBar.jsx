import { NavLink } from "react-router";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</NavLink>
      </div>
    </nav>
  );
}
 
export default Navbar;