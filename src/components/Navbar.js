import React from "react";

export default function Navbar(props) {

  return (
    <>
      <div className="navbar navbar-dark bg-light pt-4">
        <h1 className="textutils">TEXTUTILS</h1>
        <ul>
          <h5 className="items">{props.about}</h5>
          <h5 className="items">{props.home}</h5>
          <h5 className="items">{props.contact}</h5>
        </ul>
      </div>
      <div class="form-check form-switch">
  <input class="form-check-input p-2" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault"></label>
</div>
    </>
  );
}
