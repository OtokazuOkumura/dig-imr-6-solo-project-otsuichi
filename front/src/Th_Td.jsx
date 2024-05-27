// import React from "react";
// import { useState, useEffect } from "react";

export default function Th_Td(props) {
  return (
    <tr>
      <th scope="row">{props.record.id}</th>
      <td>{props.record.date}</td>
      <td>{props.record.item}</td>
      <td>{props.record.amount}</td>
      <td>{props.record.classify}</td>
    </tr>
  );
}
