import React from 'react'

const Purchase = () => {
  return (
    <section className="purchase">
        <div className="purchase-container">
            <h1>PURCHASE FROM US</h1>
            <div className="line"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima tempore, natus pariatur
                consequuntur iure?</p>
            <div className="purchase-boxes">
                <div className="purchase-card">
                    <img src="/src/assets/images/purchase1.jpg" alt="Purchase-1"/>
                    <p className="first">Kettlebell / 5kg</p>
                    <p><del>89,99$</del> / 59,99$</p>
                    <div className="shop">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Add To Card</p>
                    </div>
                </div>
                <div className="purchase-card">
                    <img src="/src/assets/images/purchase2.jpg" alt="Purchase-2"/>
                    <p className="first">Treadmill</p>
                    <p><del>899,99$</del> / 599,99$</p>
                    <div className="shop">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Add To Card</p>
                    </div>
                </div>
                <div className="purchase-card">
                    <img src="/src/assets/images/purchase3.jpg" alt="Purchase-1"/>
                    <p className="first">Adjustable Dumbbell</p>
                    <p><del>89,99$</del> / 59,99$</p>
                    <div className="shop">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Add To Card</p>
                    </div>
                </div>
                <div className="purchase-card">
                    <img src="/src/assets/images/purchase4.jpg" alt="Purchase-1"/>
                    <p className="first">Kettlebell / 3kg</p>
                    <p><del>89,99$</del> / 59,99$</p>
                    <div className="shop">
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>Add To Card</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Purchase