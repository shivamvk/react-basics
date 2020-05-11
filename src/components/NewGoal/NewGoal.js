import React from 'react';
import "./NewGoal.css"

const NewGoal = props => {

    const addGoalHandler = event => {
        event.preventDefault();

        var newGoal = {
            id: Math.random.toString,
            title: "New course goal"
        }
        props.onAddGoal(newGoal);
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" />
            <button type="submit">Add goal</button>
        </form>
    );
}

export default NewGoal;