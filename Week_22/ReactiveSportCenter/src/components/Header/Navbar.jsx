import React from 'react'

function fixedNavbar() {
  let navbar = document.querySelector(".navbar-container");
  let scrollValue = window.scrollY;
  if (scrollValue < 600) {
    navbar.classList.remove("fixedNavbar");
  } else {
    navbar.classList.add("fixedNavbar");
  }

  console.log(scrollValue);
}
window.addEventListener("scroll", fixedNavbar);

const Navbar = () => {
  return (
    <div className="navbar-container">
            <div className="logo">
                <img src="/src/assets/images/logo.png" alt=""/><a href="#home"></a>
            </div>
            <label htmlFor="menu-btn" className="menu-icon"><i className="fa-solid fa-bars"></i></label>
            <input type="checkbox" id="menu-btn" className="menu-btn" />
            <div className="navbar">
                <a href="#home">Home</a>
                <a href="#classes">Classes</a>
                <a href="#trainer">Trainer</a>
                <a href="#review">Review</a>
                <a href="#contact">Contact</a>
                <button className="btn-join-us">JOIN US</button>
            </div>
        </div>
  );
};

export default Navbar;