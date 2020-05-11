import React, {useState} from 'react';
import "./NewGoal.css"

const NewGoal = props => {
    const [enteredText, setEnteredText] = useState(''); 
    const addGoalHandler = event => {
        event.preventDefault();

        var newGoal = {
            id: Math.random.toString,
            title: enteredText
        }
        props.onAddGoal(newGoal);
    }

    const onTextChangeHandler = event => {
        setEnteredText(event.target.value);
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input value={enteredText} onChange={onTextChangeHandler} type="text" />
            <button type="submit">Add goal</button>
        </form>
    );
}

export default NewGoal;