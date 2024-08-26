import React, { useEffect, useState } from 'react';  // Import React, useEffect, and useState hooks
import TaskTable from '../components/table/TaskTable';  // Import TaskTable component
import AddTaskForm from '../components/Forms/AddTaskForm';  // Import AddTaskForm component
import { useActiveLink } from "../context/ActiveLinkContext";  // Import useActiveLink custom hook from ActiveLinkContext

const TaskPage = () => {
    const [refresh, setRefresh] = useState(false);  // State to control the refresh of the task list
    const { updateActiveLink } = useActiveLink();  // Destructure updateActiveLink from the context

    useEffect(() => {
        updateActiveLink('/');  // Set the active link to '/' when the component mounts
    }, [updateActiveLink]);  // Dependency array ensures this effect runs only when updateActiveLink changes

    const handleTaskAdded = () => {
        setRefresh(!refresh);  // Toggle the refresh state to trigger a re-fetch of the task list
    };

    return (
        <div className="container">
            <AddTaskForm onTaskAdded={handleTaskAdded} />
            <TaskTable refresh={refresh} />
        </div>
    );
};

export default TaskPage;  // Export the TaskPage component as the default export
