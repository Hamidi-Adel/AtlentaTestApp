import React, {useEffect, useState} from 'react';
import TaskTable from '../components/table/TaskTable';
import AddTaskForm from '../components/Forms/AddTaskForm';
import {useActiveLink} from "../context/ActiveLinkContext";

const TaskPage = () => {
    const [refresh, setRefresh] = useState(false);
    const {updateActiveLink} = useActiveLink();

    useEffect(() => {
        updateActiveLink('/');
    }, [updateActiveLink]);

    const handleTaskAdded = () => {
        setRefresh(!refresh);  // Toggle refresh to force re-fetching the task list
    };

    return (
        <div className="container">
            <AddTaskForm onTaskAdded={handleTaskAdded}/>
            <TaskTable refresh={refresh}/>
        </div>
    );
};

export default TaskPage;
