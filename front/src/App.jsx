// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

import { useState, useEffect } from "react";
import Th_Td from "./Th_Td.jsx";
import Form from "./Form.jsx";
import "./table.css";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("/api/list")
      .then((res) => res.json())
      .then((x) => {
        setList(x);
      });
  }, []);

  return (
    <>
      <h1>Mame Foward</h1>
      <Form />
      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">date</th>
            <th scope="col">item</th>
            <th scope="col">amount</th>
            <th scope="col">classify</th>
          </tr>
        </thead>
        <tbody>
          {list.length > 0 ? (
            list.map((ele, index) => <Th_Td key={index} record={ele} />)
          ) : (
            <Th_Td key={0} record={[]} />
          )}
        </tbody>
      </table>
    </>
  );
}

export default App;
