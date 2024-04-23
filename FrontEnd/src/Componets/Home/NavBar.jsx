import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import IIITUNA from "../../Images/IIITULogo.png";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className={style.header}>
      <img
        src={IIITUNA}
        alt="IIIT University Logo"
        style={{ width: "8vh", height: " min-content" }}
      />
      <nav className={`${style.nav} ${style.responsive_nav}`} ref={navRef}>
        <Link to="/">Home</Link>
        <a href="https://rkgit.edu.in/about/vision-and-mission/">About</a>
        <a href="https://iiitu.ac.in/ug-programs/">Courses</a>
        <a href="https://iiitu.ac.in/department/school-of-computing/faculty/">Faculty</a>
        <a href="https://iiitu.ac.in/placement/">Placement</a>
        <a href="https://iiitu.ac.in/admissions/josaa-csab/">Admission</a>
        <a href="https://iiitu.ac.in/gallery/">Gallery</a>
        <a href="https://rkgit.edu.in/contactus/">Contact</a>
        <Link to="/StudentPanel">Student Panel</Link>
        <Link to="/AdminPanel">Admin Panel</Link>
        <button className={`${style["nav-btn"]} ${style["nav-close-btn"]}`} onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className={style["nav-btn"]} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
