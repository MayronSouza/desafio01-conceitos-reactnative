import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle === '') return;

    const id = new Date().getTime();

    const newTask = {
      id,
      title: newTaskTitle,
      done: false,
    }

    setTasks([...tasks, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    setTasks(tasks.filter(task => {
      if (task.id === id) {
        task.done = task.done === true ? false : true;
      }
    }));
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const newTasksArray = tasks.filter(task => task.id !== id);

    setTasks(newTasksArray);
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}