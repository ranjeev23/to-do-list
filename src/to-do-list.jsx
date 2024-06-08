import React, { useState } from "react"


function ToDoList() {

    const[input, setInput] = useState('');
    const [tasks, setTasks] = useState(['hello this is a first msg','hello this is a sec task']);
    
    function handleInputChange(event) {
        console.log(event)
        console.log(event.target.value)
        console.log('1')
        setInput(event.target.value)
        
    }

    function handleAdd() {
        
        console.log(input.trim());
        if (input.trim() !== '') {
            setTasks([...tasks, input])
            setInput('')
        }
    }

    function handleDelete(index) {
        const new_tasks = [];

        for (let i = 0; i < tasks.length; i++){
            if (i !== index) {
                new_tasks.push(tasks[i])
            }
        }

        setTasks(new_tasks)
    }

    function handleUp(index) {
        
        let new_tasks = [...tasks];

        for (let i = 1; i < tasks.length; i++) {
          if (i === index) {
            console.log(index, tasks[i - 1], tasks[i], new_tasks);
            [new_tasks[i - 1], new_tasks[i]] = [new_tasks[i], new_tasks[i - 1]];
            console.log(new_tasks);
          }
        }

        setTasks(new_tasks);
        console.log(new_tasks);
    }

    function handleDown(index) {
        let new_tasks = [...tasks];

        for (let i = 0; i < tasks.length-1; i++) {
          if (i === index) {
            [new_tasks[i + 1], new_tasks[i]] = [new_tasks[i], new_tasks[i + 1]];
            console.log(new_tasks);
          }
        }

        setTasks(new_tasks);
        console.log(new_tasks);
    }


    
    return (
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <input
          type="text"
          id="task"
          name="task"
          value={input}
          placeholder="enter the new task"
          onChange={handleInputChange}
        ></input>

        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button className="up-button" onClick={() => handleUp(index)}>
                ☝️
              </button>
              <button className="down-button" onClick={() => handleDown(index)}>
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
}

export default ToDoList;