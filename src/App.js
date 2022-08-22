import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [title, setTitle] = useState("My List");
  const changeTitleHandler = useCallback(() => {
    setTitle("New List");
  }, []);
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      <DemoOutput title={title} items={listItems} />
      <Button onClick={changeTitleHandler}>Change title</Button>
    </div>
  );
}

export default App;
