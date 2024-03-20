import "./styles.css";
import { useRef, useState } from "react";

const App3 = () => {
  const inputRef = useRef(0);
  const valueRef = useRef(0);
  const [count, setCount] = useState(0);

  console.log("render ref", valueRef.current);
  const onSubmit = () => {
    inputRef.current.focus();
    // console.log("react", inputRef.current.value);
    // let a = document.getElementById("txtbx");
    // console.log("js", a.value);

    setCount(count + 1);
    valueRef.current = valueRef.current + 1;
    console.log("click ref", valueRef.current);
    console.log("state", count);
  };

  return (
    <div className="modal--overlay">
      <div className="modal">
        <h1>Insert a new value</h1>
        <div>
          <span> {valueRef.current}</span>
          <input id="txtbx" ref={inputRef} type="text" />
          <button onClick={onSubmit}>Save new value</button>
        </div>
      </div>
    </div>
  );
};
export default App3;

