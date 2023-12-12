import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import './App.css';

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [updateIndex, setUpdateIndex] = useState(null); 
  const navigate = useNavigate(); 
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleUpdateTask = (index) => {
    setUpdateIndex(index);
    setNewTask(tasks[index]); 
  };

  const handleSaveUpdate = () => {
    const updatedTasks = [...tasks];
    updatedTasks[updateIndex] = newTask;
    setTasks(updatedTasks);
    setUpdateIndex(null); 
    setNewTask(''); 
  };

  const handleCancelUpdate = () => {
    setUpdateIndex(null); 
    setNewTask(''); 
  };
  const handleGoToLoginPage = () => {
    navigate('/');
  };

  return (
    <div className='container'> 
      <input className="c-checkbox" type="checkbox" id="checkbox" />
      <div className="c-formContainer">
        <form className="c-form" action="">
          <ListGroup className="list-group-flush">
            <input
              className="c-form__input"
              placeholder="Add To DO Here !"
              type="text"
              value={newTask}
              onChange={handleInputChange}
            />
            <label className="c-form__buttonLabel" htmlFor="checkbox">
              <button className="c-form__button" type="button"   onClick={handleGoToLoginPage}>
                BACK
              </button>
            </label>
            <label className="c-form__buttonLabel" htmlFor="checkbox">
              <button className="button-back" type="button"  onClick={handleAddTask}>
            ADD
              </button>
            </label>
            {tasks.map((task, index) => (
              <ListGroup.Item key={index} className='task' >
                {updateIndex === index ? (
                  <div className='in'>
                    <input 
                      type="text"
                      value={newTask}
                      onChange={handleInputChange}
                    />
                    <Button className='button-save'
                      variant="outline-danger"
                      size="sm"
                      onClick={handleSaveUpdate}
                    >
                      Save
                    </Button>
                    <Button className='button-cancel'
                      variant="outline-danger"
                      size="sm"
                      onClick={handleCancelUpdate}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <div className='on'>
                    {task}
                    <Button className='button-danger'
                      variant="outline-danger"
                      size="sm"
                      style={{ float: 'right', marginLeft: '10px' }}
                      onClick={() => handleDeleteTask(index)}
                    >
                      Delete
                    </Button>
                    <Button className='button-danger'
                      variant="outline-danger"
                      size="sm"
                      style={{ float: 'right' }}
                      onClick={() => handleUpdateTask(index)}
                    >
                      Update
                    </Button>
                  </div>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <label
            className="c-form__toggle"
            htmlFor="checkbox"
            data-title="ADD TO DO"
          />
        </form>
      </div>
    </div>
  );
};

export default List;
