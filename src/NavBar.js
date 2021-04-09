import "./navbar.css";

export default function NavBar() {
  return (
    <div className="main-navbar-section">
      <h1 className="title">My Todo Web application</h1>
      <div className="buttons">
        <button className="nav-btn">Sign Up</button>
        <button className="nav-btn">Sign In</button>
      </div>
    </div>
  );
}
