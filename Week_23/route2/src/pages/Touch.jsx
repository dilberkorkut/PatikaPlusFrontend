import React from "react";
import Main from "../layouts/Main";
import { useNavigate } from "react-router-dom";

const Touch = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //

    navigate("/home");
  };
  return (
    <Main>
      <h1>Burasi touch page</h1>
      <form onSubmit={handleSubmit}>
        <input name="full-name" />
        <input name="subject" />
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
    </Main>
  );
};

export default Touch;
