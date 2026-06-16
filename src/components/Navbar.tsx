import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="logo">HappyBride</div>

      <div className="nav-links">
        <Link
  to="/"
  className={location.pathname === "/" ? "active-link" : ""}
>
  Home
</Link>
        <Link
  to="/vendors"
  className={location.pathname === "/vendors" ? "active-link" : ""}
>
  Vendors
</Link>

<Link
  to="/inspo"
  className={location.pathname === "/inspo" ? "active-link" : ""}
>
  Inspo
</Link>

        <Link
  to="/plan"
  className={location.pathname === "/plan" ? "active-link" : ""}
>
  Plan
</Link>
<Link
        to="/dresses"
        className={location.pathname === "/dresses" ? "active-link" : ""}
>
  Dresses
</Link>
      </div>
    </nav>
  );
}

export default Navbar;