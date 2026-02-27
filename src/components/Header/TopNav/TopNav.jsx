import "./TopNav.css";
import logo from "../../../assets/Navbar/Marvel_Logo.svg";
import logo2 from "../../../assets/Navbar/icon-mu-shield.png";

export default function TopNav() {
  // Function to open sidebar
  const openSidebar = () => {
    document.querySelector('.sidebar').classList.add('open');
    document.querySelector('.sidebar-overlay').classList.add('active');
  };

  // Function to close sidebar
  const closeSidebar = () => {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.sidebar-overlay').classList.remove('active');
  };

  return (
    <>
      {/* Sidebar Overlay */}
      <div className="sidebar-overlay" onClick={closeSidebar}></div>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
        
          <button className="close-btn" onClick={closeSidebar}>
            <i className="fa-regular fa-x"></i>
          </button>
        </div>
        <ul className="sidebar-links">
            <li><a href="#" className="nav-links">NEWS</a></li>
          <li><a href="#" className="nav-links">COMICS</a></li>
          <li><a href="#" className="nav-links">CHARACTERS</a></li>
          <li><a href="#" className="nav-links">MOVIES</a></li>
          <li><a href="#" className="nav-links">TV SHOWS</a></li>
          <li><a href="#" className="nav-links">GAMES</a></li>
          <li><a href="#" className="nav-links">VIDEOS</a></li>
          <li><a href="#" className="nav-links">LIFESTYLE</a></li>
          <li><a href="#" className="nav-links">ROLE-PLAYING GAME </a></li>
          <li><a href="#" className="nav-links">BOOKS</a></li>
          <li><a href="#" className="nav-links">PODCASTS</a></li>
          <li><a href="#" className="nav-links">SHOP</a></li>
        </ul>
      </div>

      {/* Top Navigation */}
      <div className="TopNav">
        <div className="Top-container">
          <div className="Left-TopNav">
            {/* Menu Icon */}
            <div className="Sidebar-Menu" onClick={openSidebar}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className="login-group">
              <i className="fa-solid fa-circle-user"></i>
              <p>LOG IN &nbsp;|&nbsp; SIGN UP</p>
            </div>
          </div>

          <div className="Middle-TopNav">
            <div className="logo-container">
              <img src={logo} alt="Marvel-logo" />
            </div>
          </div>
          <div className="Right-TopNav">
            <div className="icon-container">
              <img src={logo2} alt="Icon" />
            </div>

            <div className="text-container">
              <h5>MARVEL UNLIMITED</h5>
              <p>SUBSCRIBE</p>
            </div>
          </div>
          <div className="Right-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </>
  );
}