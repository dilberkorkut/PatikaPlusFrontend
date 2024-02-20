import React from "react";

const ClassesHeader = () => {
  return (
    <section id="classes" className="classes-header ">
      <h1>OUR CLASSES</h1>
      <div className="line"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        minima tempore, natus pariaturconsequuntur iure?
      </p>
      <div className="classes-buttons">
        <button className="btn-classes">
          <div className="triangle"></div>Yoga
        </button>
        <button className="btn-classes">
          <div></div>Group
        </button>
        <button className="btn-classes">
          <div></div>Solo
        </button>
        <button className="btn-classes">
          <div></div>Stretching
        </button>
      </div>
    </section>
  );
};

export default ClassesHeader;
