// TaskTable.js
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import API from "../../api/axios";
import { Table } from 'react-bootstrap';
import TaskRow from "./taskRow";
import TaskTableHeader from "./TaskTableHeader";

const TaskTable = ({ refresh }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, [refresh]);

    const fetchTasks = async () => {
        try {
            const response = await API.get('/tasks/');
            setTasks(response.data);
        } catch (error) {
            toast.error('Error fetching tasks:', error);
            console.error('Error fetching tasks:', error);
        }
    };

    const handleTaskUpdated = () => {
        fetchTasks();  // Refresh the task list when a task is updated
    };

    const handleTaskDeleted = () => {
        fetchTasks();  // Refresh the task list when a task is deleted
    };

    return (
        <div className="row">
            <div className="col-md-12 mb-3">
                <div className="card shadow border-0 mb-3">
                    <div className="table-responsive">
                        <div className="card-header"><i className="fa fa-tasks"/> Tasks</div>
                        <div className="card-body">
                            <Table striped bordered hover>
                                <TaskTableHeader />
                                <tbody>
                                    {tasks.map((task) => (
                                        <TaskRow
                                            key={task.id}
                                            task={task}
                                            onTaskUpdated={handleTaskUpdated}
                                            onTaskDeleted={handleTaskDeleted}
                                        />
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskTable;
