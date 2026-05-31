import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/vendors">Vendors</Link>
      <Link to="/inspo">Inspo</Link>
      <Link to="/plan">Plan</Link>
    </nav>
  );
}

export default Navbar;