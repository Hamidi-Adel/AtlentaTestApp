import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import API from "../../api/axios";
import {toast} from "react-toastify";

const AddTaskForm = ({onTaskAdded}) => {
    const [taskName, setTaskName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!taskName) {
            setError('Task name is required');
            toast.error('Task name is required')
            return;
        }

        try {
            await API.post('/tasks/', {name: taskName});
            setTaskName('');
            setError('');  // Clear any previous errors
            onTaskAdded();  // Notify the parent component to refresh the task list
            toast.success(`The task ${taskName} has been successfully added`);
        } catch (error) {
            console.error('Error adding task:', error);
            setError('Failed to add task');
            toast.error('Error adding task:', error)
        }
    };

    return (
        <Form onSubmit={handleSubmit} className={"mb-5"}>
            <Form.Group controlId="taskName" className="d-flex align-items-center">
                <Form.Label className="mb-0 me-2">Task Name</Form.Label>
                <Form.Control
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="Enter task name"
                    className="Form me-2"
                />
                <Button variant="success" type="submit">
                    <i className="fa fa-check"/> Add Task
                </Button>
            </Form.Group>
            {error && <div className="text-danger mt-2">{error}</div>}
        </Form>
    );
};

export default AddTaskForm;
