// TaskRow.js
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import API from "../../api/axios";

const TaskRow = ({ task, onTaskUpdated, onTaskDeleted }) => {
    const [editing, setEditing] = useState(false);
    const [editedTaskName, setEditedTaskName] = useState(task.name);

    const saveTask = async () => {
        try {
            await API.put(`/tasks/${task.id}/`, { name: editedTaskName });
            toast.success('Task updated successfully');
            setEditing(false);
            onTaskUpdated();
        } catch (error) {
            toast.error('Error updating task');
            console.error('Error updating task:', error);
        }
    };

    const deleteTask = async () => {
        try {
            await API.delete(`/tasks/${task.id}/`);
            toast.warning('Task deleted successfully');
            onTaskDeleted();
        } catch (error) {
            toast.error('Error deleting task');
            console.error('Error deleting task:', error);
        }
    };

    return (
        <tr>
            <td>
                {editing ? (
                    <Form.Control
                        type="text"
                        value={editedTaskName}
                        onChange={(e) => setEditedTaskName(e.target.value)}
                    />
                ) : (
                    task.name
                )}
            </td>
            <td>{new Date(task.created_at).toLocaleString()}</td>
            <td>
                {editing ? (
                    <>
                        <Button variant="success" onClick={saveTask}>
                            <i className="fa fa-save"/> Save
                        </Button>
                        <Button variant="secondary" onClick={() => setEditing(false)} className="ms-2">
                            <i className="fa fa-times"/> Cancel
                        </Button>
                    </>
                ) : (
                    <>
                        <Button variant="primary" onClick={() => setEditing(true)}>
                            <i className="fa fa-edit"/> Edit
                        </Button>
                        <Button
                            variant="danger"
                            onClick={deleteTask}
                            className="ms-2"
                        >
                            <i className="fa fa-trash"/> Delete
                        </Button>
                    </>
                )}
            </td>
        </tr>
    );
};

export default TaskRow;
