import React, { useState, useEffect, useReducer, useRef } from "react";
import axios from "axios";
import db from "../axios/axios";

const Todo = props => {
  //const [todoName, setTodoName] = useState("");
  //const [todosData, setTodoList] = useState([]);
  //const [submitedTodo, updateSumbitedTdo] = useState(null);

  const todoInputRef = useRef("");

  const todoListReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "SET":
        return action.payload;
      case "REMOVE":
        return state.filter(todo => todo[0] !== action.payload[0]);
      default:
        return state;
    }
  };

  const [todosData, dispatch] = useReducer(todoListReducer);

  useEffect(() => {
    axios
      .get(db())
      .then(res => {
        const todos = res.data;
        let data = [];
        for (let i in todos) {
          data = [...data, [i, todos[i]]];
        }
        dispatch({ type: "SET", payload: data });
      })
      .catch(err => {
        console.log(err);
      });
    return () => {
      console.log("Cleanup");
    };
  }, []);

 

  // const onInputChange = event => {
  //   setTodoName(event.target.value);
  // };

  const todoName = todoInputRef.current.value;

  const submitToDo = () => {
    axios
      .post(db(), JSON.stringify(todoName))
      .then(res => {
        setTimeout(() => {
          dispatch({ type: "ADD", payload: [res.data.name, todoName] });
        }, 3000);
      })
      .catch(err => {
        console.log(err);
      });

      todoInputRef.current.value = '';
  };

  const removeToDo = toDo => {
    axios
      .delete(`https://react-hooks-861cf.firebaseio.com/todos/${toDo[0]}.json`)
      .then(res => {
        dispatch({ type: "REMOVE", payload: toDo });
      })
      .catch(err => console.log(err));
  };

  const renderToDos = () => {
    if (!todosData) return "";
    return todosData.map(toDo => {
      return (
        <li key={toDo[0]}>
          {toDo[1]}
          <button
            onClick={() => {
              removeToDo(toDo);
            }}
          >
            delete
          </button>
        </li>
      );
    });
  };
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        ref={todoInputRef}
      />
      <input type="submit" value="Submit" onClick={submitToDo} />
      <ol>{renderToDos()}</ol>
    </React.Fragment>
  );
};

export default Todo;
