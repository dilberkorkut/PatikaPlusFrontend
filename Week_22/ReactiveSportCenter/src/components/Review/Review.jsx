import React from 'react'

const Review = () => {
  return (
    <section id="review" className="review">
        <div className="review-container">
            <h1>REVIEW CLIENT</h1>
            <div className="line"></div>
            <p className="review-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima tempore,
                natus pariatur
                consequuntur iure?</p>
            <div className="review-clients">
                <div className="client-cfo">
                    <div className="client1">
                        <img src="/src/assets/images/client1.jpg" alt="CFO"/>
                        <div>
                            <p><b>Diet Expert</b></p>
                            <p>CFO</p>
                        </div>
                    </div>
                    <div className="comment">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda amet porro doloremque
                            obcaecati omnis ullam harum accusantium a possimus eveniet repellendus debitis earum ea
                            optio, sit aperiam beatae eaque placeat?
                        </p>
                    </div>
                </div>
                <div className="client-ceo">
                    <div className="client1">
                        <img src="/src/assets/images/client2.jpg" alt="CEO"/>
                        <div>
                            <p><b>Cardio Trainer</b></p>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div className="comment">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda amet porro doloremque
                            obcaecati omnis ullam harum accusantium a possimus eveniet repellendus debitis earum ea
                            optio, sit aperiam beatae eaque placeat?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review