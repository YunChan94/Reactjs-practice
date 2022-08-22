import React, { useMemo } from "react";
import classes from "./DemoOutput.module.css";
const DemoOutput = (props) => {
  const { items } = props;
  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);
  console.log("Demo running");
  return (
    <div>
      <h1>{props.title}</h1>
      <ul className={classes.list}>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default React.memo(DemoOutput);
