import React from 'react'



const Bmi = () => {
    

  return (
    <section className="classes-container-bmi">
        <div className="classes-content-bmi">
            <h1>BMI Calculator</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, eaque modi officia consequuntur
                laborum
                amet sapiente libero autem et, accusantium minus quidem recusandae corporis error consequatur
                reiciendis
                perspiciatis distinctio non.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a quibusdam perspiciatis hic. Nam
                distinctio
                nesciunt atque molestias quaerat. Placeat nobis perferendis nam magni dignissimos repellendus minus
                officiis
                error voluptatem?</p>
            <div className="inputs">
                <input id="height" type="text" placeholder="Your height"/>
                <label className="label-bmi" htmlFor="height"> cm </label>
                <input id="weight" type="text" placeholder="Your weight"/>
                <label className="label-bmi" htmlFor="weight"> kg </label>
            </div>
        </div>
        <div className="your-bmi">
            <p>Your BMI</p>
            <img className="img-bmi" src="/src/assets/images/bmi-index.jpg" alt="BMI-Index"/>
            <div id="bmi-tri" className="bmi-tri"></div>
        </div>
    </section>
  )
}

export default Bmi;