import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">

        <div className="header">
        <Link to="/" className="header">Happy cake</Link>
        </div>
        
        <div className="text">
        <Link to="/" className="link">Home</Link>
        <Link to="/contacto" className="link">Contacto</Link>
        </div>

        </div>
    );
}

export default Navbar;