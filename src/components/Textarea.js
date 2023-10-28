import React, { useState } from "react";

export default function Textarea(props) {
  const clickupper = () => {
    const newtext = text.toUpperCase();
    nexttext(newtext);
  };
  const clicklower = () => {
    const newtext = text.toLowerCase();
    nexttext(newtext);
  };
  const changeupper = (event) => {
    nexttext(event.target.value);
  };
  const [text, nexttext] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <textarea
          cols="100"
          rows="10"
          value={text}
          onChange={changeupper}
        ></textarea>
      </div>
      <div className="btns">
        <button className="btn bg-light " onClick={clickupper}>
          UpperCase
        </button>
        <button className="btn bg-light" onClick={clicklower}>
          LowerCase
        </button>
      </div>
      <p className="length">
        {" "}
        {text.split(" ").length} Words and {text.length} characters
      </p>
    </>
  );
}
