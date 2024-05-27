// import React from "react";
// import { useState, useEffect } from "react";

export default function Form(props) {
  return (
    <form action="/api/record" method="POST" className="form-post-record">
      <div className="form-post-record">
        <label htmlFor="name">Enter your name: </label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="form-post-record">
        <input type="submit" value="Subscribe!" />
      </div>
    </form>
  );
}
