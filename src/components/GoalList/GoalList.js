import React from "react";
import "./GoalList.css";

const GoalList = (props) => {
  return (
    <ul className="goalList">
      {props.goals.map((goal) => {
        return <li key={goal.id}>{goal.title}</li>;
      })}
    </ul>
  );
};

export default GoalList;
