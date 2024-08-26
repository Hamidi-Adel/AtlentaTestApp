import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskPage from './pages/tasks';
import Base from "./components/Base/base";
import { ActiveLinkProvider } from "./context/ActiveLinkContext";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
function App() {
    return (
        <ActiveLinkProvider>
            <ToastContainer />
            <Router>
                <Base>
                    <Routes>
                        <Route path="/" element={<TaskPage />} />
                    </Routes>
                </Base>
            </Router>
        </ActiveLinkProvider>
    );
}

export default App;