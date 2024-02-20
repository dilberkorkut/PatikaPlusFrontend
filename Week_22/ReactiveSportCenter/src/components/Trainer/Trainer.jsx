import React from 'react'

const Trainer = () => {
  return (
    <section id="trainer" className="trainer">
        <div className="trainer-container">
            <h1>OUR BEST TRAINERS</h1>
            <div className="line"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima tempore, natus pariatur
                consequuntur iure?</p>
            <div className="trainer-boxes">
                <div className="trainer-box">
                    <img src="/src/assets/images/trainer1.jpg" alt="Trainer-1"/>
                    <div className="clip-path"></div>
                    <div className="clip-path-after">
                        <h2>Mary Color</h2>
                        <p>Plates Tranier</p>
                    </div>
                </div>
                <div className="trainer-box">
                    <img src="/src/assets/images/trainer2.jpg" alt="Trainer-2"/>
                    <div className="clip-path"></div>
                    <div className="clip-path-after">
                        <h2>Jack Muscle</h2>
                        <p>Mussle Tranier</p>
                    </div>
                </div>
                <div className="trainer-box">
                    <img src="/src/assets/images/trainer3.jpg" alt="Trainer-3"/>
                    <div className="clip-path"></div>
                    <div className="clip-path-after">
                        <h2>Jane Doe</h2>
                        <p>Cardio Tranier</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Trainer