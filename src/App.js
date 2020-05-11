import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const goals = [
    {id: "cg1", title: "Finish the course"},
    {id: "cg2", title: "Learn all about the course main topic"},
    {id: "cg3", title: "Help other students in Q&A"},
  ];

  const addGoalHandler = (newGoal) => {
    goals.push(newGoal);
    console.log(goals);
  }

  return (
    <div className="courseGoals">
      <h1>Course Goals</h1>
      <NewGoal onAddGoal={addGoalHandler}/>
      <GoalList goals={goals}/>
    </div>
  );
};

export default App;
