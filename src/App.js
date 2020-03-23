import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTaskActionCreator,
  deleteTaskActionCreator,
  changeTaskStatusDone,
  loadedDataActionCreator,
  loadingDataActionCreator,
  errorDataLoadingActionCreator
} from "./store";

import * as Styled from "./Styles";
import { MAX_NUMBER_OF_TASKS } from "./index";

const limitAndMapTask = input =>
  input
    .filter((_, index) => index <= MAX_NUMBER_OF_TASKS - 1)
    .map(task => {
      return {
        id: task.id,
        title: task.title,
        completed: task.completed
      };
    });

function App() {
  const [inputValue, setInputValue] = useState("");
  const taskList = useSelector(state => state.todos);
  const isMax = useSelector(state => state);
  const dataStatus = useSelector(state => state.dataStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataStatus.isDataLoaded && !dataStatus.isDataLoading) {
      dispatch(loadingDataActionCreator(true));
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(result => result.json())
        .then(result => {
          dispatch(addTaskActionCreator(limitAndMapTask(result)));
          dispatch(loadedDataActionCreator());
        })
        .catch(() => {
          dispatch(errorDataLoadingActionCreator());
        });
    }
  }, [dispatch, dataStatus.isDataLoaded, dataStatus.isDataLoading]);

  const handleSubmit = event => {
    event.preventDefault();
    if (isMax.isMaxNumberOfTasks) {
      alert(
        "Sorry, you can add 10 tasks maximum. To add a new task delete completed one."
      );
    }
    if (inputValue === "") {
      alert("Task can't be empty");
    } else {
      dispatch(addTaskActionCreator([{ title: inputValue, completed: false }]));
      setInputValue("");
    }
  };

  const handleDelete = index => {
    dispatch(deleteTaskActionCreator(index));
  };

  const handleStatusDone = index => {
    dispatch(changeTaskStatusDone(index));
  };

  const isAddingTasksPossible = () => {
    if (isMax.isMaxNumberOfTasks) {
      return (
        <>
          <Styled.InfoMax>
            Sorry, you can add 10 tasks maximum. To add a new task delete
            completed one.
          </Styled.InfoMax>
          <Styled.Form onSubmit={handleSubmit}>
            <Styled.Input
              type="text"
              value={inputValue}
              disabled="disabled"
              onChange={event => setInputValue(event.target.value)}
            />
          </Styled.Form>
        </>
      );
    }
    return (
      <>
        <Styled.Info>To add a task to list start typing.</Styled.Info>
        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Input
            type="text"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />
          <Styled.InputSubmit type="submit" value="Add task" />
        </Styled.Form>
      </>
    );
  };

  const dataStatusInfo = () => {
    if (dataStatus.isDataError) {
      return <h3>Sorry, something went wrong... </h3>;
    } else if (dataStatus.isDataLoading) {
      return <h3>Loading...</h3>;
    }
    return taskList.map((taskData, index) => (
      <Styled.ListElement key={index}>
        {taskData.completed === false ? (
          <>
            <Styled.TaskIndexIncompleted>
              {" "}
              {index + 1}{" "}
            </Styled.TaskIndexIncompleted>
            <Styled.ListElementTextIncompleted>
              {taskData.title}
            </Styled.ListElementTextIncompleted>
            <Styled.DoneCheck
              onClick={() => handleStatusDone(index)}
              className="fas fa-check"
            ></Styled.DoneCheck>
          </>
        ) : (
          <>
            <Styled.TaskIndexCompleted> {index + 1} </Styled.TaskIndexCompleted>
            <Styled.ListElementTextCompleted>
              {taskData.title}
            </Styled.ListElementTextCompleted>
            <Styled.DeleteCheck
              onClick={() => handleDelete(index)}
              className="fas fa-times"
            ></Styled.DeleteCheck>
          </>
        )}
      </Styled.ListElement>
    ));
  };

  return (
    <Styled.Container>
      <Styled.GlobalStyles />
      <Styled.Title>To do app</Styled.Title>
      {isAddingTasksPossible()}
      <Styled.List>{dataStatusInfo()}</Styled.List>
    </Styled.Container>
  );
}

export default App;
