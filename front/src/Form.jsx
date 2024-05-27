// import React from "react";
// import { useState, useEffect } from "react";

export default function Form() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/api/record/", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log("formJson.myInput---\n", JSON.parse(formJson.myInput));
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <label>
        Text input: <input name="myInput" defaultValue="Enter Your Record." />
      </label>
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
}
