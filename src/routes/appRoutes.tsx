import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  

import StudentRoutes from './studentRoutes';
import TeacherRoutes from './teacherRoutes';
import Login from '../components/login';
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/students/*" element={<StudentRoutes />} />
                <Route path="/teachers/*" element={<TeacherRoutes />} />
                {/* <Route path="/" element={<Navigate to="/students/dashboard" />} /> */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;