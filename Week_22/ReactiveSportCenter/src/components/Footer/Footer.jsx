import React from 'react'

const Footer = () => {
  return (
    <section className="footer">
        <div className="footer-container">
            <div className="footer-logo">
                <img src="./images/logo.png" alt=""/><a href="#home"></a>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quos sunt, cupiditate commodi ut
                    at blanditiis. Impedit nulla vel ullam itaque architecto dicta mollitia modi, optio, labore iusto
                    iure fuga!</p>
            </div>
            <div className="footer-inf-links">
                <div className="information">
                    Information
                    <li>About Us</li>
                    <li>classNamees</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </div>
                <div className="links">
                    Helpfull Links
                    <li>Services</li>
                    <li>Supports</li>
                    <li>Terms & Condition</li>
                    <li>Privacy Policy</li>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Footer;