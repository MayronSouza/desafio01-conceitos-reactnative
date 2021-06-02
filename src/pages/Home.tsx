import React, { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';

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

    setTasks(oldState => [...oldState, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    const task = tasks.filter(task => task.id === id)[0];
    task.done = !task.done;
    setTasks([...new Set([task, ...tasks])]);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(task => task.id !== id));
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