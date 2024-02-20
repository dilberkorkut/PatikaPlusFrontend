import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
        <div className="contact-container">
            <h1>CONTACT US</h1>
            <div className="line"></div>
            <p className="p-container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima tempore,
                natus pariatur
                consequuntur iure?</p>
            <div className="info-container">
                <div className="info">
                    <div className="no-email">
                        <div className="mobile">
                            <p className="i-title">Mobile Number</p>
                            <p>+135 321 4442</p>
                        </div>
                        <div className="email">
                            <p className="i-title">Email</p>
                            <p>demo@demo.com</p>
                        </div>
                    </div>
                    <div className="appointment">
                        <label htmlFor="title-appointment">Make An Appointment</label>
                        <input type="text" className="name" placeholder="Your Name"/>
                        <input type="text" className="email" placeholder="Your Email"/>
                        <textarea name="message" id="message" cols="" rows="10" defaultValue="Your Message"></textarea>
                    </div>
                </div>
                <div className="map">
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385399.3519826978!2d28.682534897266322!3d41.00485195720003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1sen!2str!4v1706817875990!5m2!1sen!2str"
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="map"
                        ></iframe> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;