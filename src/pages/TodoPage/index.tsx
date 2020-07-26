import React, { useReducer, useEffect, useState } from 'react';
import { todoReducer, initialState } from '../../reducers/todo.reducer';
import TabsList from '../../components/TabsList';
import TodoAdd from '../../components/TodoAdd';
import { Todo } from '../../models/Todo.interface';
import './TodoPage.style.css';
import { TodoContext } from '../../context/TodoContext';
import TodoList from '../../components/TodoList';
import Button from '../../components/Button';
import { deleteAllItem } from '../../reducers/todo.actions';
import { TabInterface } from '../../models/Tab.interface';

const init = (): Todo[] => {
  return JSON.parse(localStorage.getItem('todos') as string) || [];
};
const tabsList: TabInterface[] = [
  { title: 'All', isActived: true },
  { title: 'Active', isActived: false },
  { title: 'Completed', isActived: false }
];
const TodoPage = () => {
  const [activedTag, setActivedTag] = useState('All');
  const [tabs, setTabs] = useState<TabInterface[]>(tabsList);
  const [todos, todoDispatch] = useReducer(todoReducer, initialState, init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const activedTab = tabs.find((tab: TabInterface) => tab.isActived === true)?.title || '';
    setActivedTag(activedTab);
  }, [tabs]);

  const deleteAll = () => {
    todoDispatch(deleteAllItem());
  };

  const completedTab = (): boolean => {
    const activedTabTitle: string = activedTag;
    return activedTabTitle === 'Completed';
  };

  const getTodoPerTag = (activedTab: string): Todo[] => {
    let todoList: Todo[] = [];
    switch (activedTab) {
      case 'All':
        todoList = todos;
        break;
      case 'Active':
        todoList = todos.filter((todo: Todo) => todo.done === false);
        break;
      case 'Completed':
        todoList = todos.filter((todo: Todo) => todo.done === true);
        break;
    }
    return todoList;
  };

  const todosPerTab = getTodoPerTag(activedTag);

  return (
    <TodoContext.Provider value={{ todos, todoDispatch, activedTag }}>
      <div className="todoPage--container">
        <TabsList tabsList={tabs} setActiveTabs={setTabs}></TabsList>
        {!completedTab() && <TodoAdd></TodoAdd>}
        <TodoList todos={todosPerTab}></TodoList>
        {completedTab() && todosPerTab.length > 1 && <Button label="delete all" handlerClick={deleteAll}></Button>}
      </div>
    </TodoContext.Provider>
  );
};

export default TodoPage;
