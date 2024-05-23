import React from 'react';
import {Route, Routes} from 'react-router-dom';

import StudentDashboard from '../pages/student/studentDashboard';
import StudentProfile from '../pages/student/studentProfile';
import PrivateRoute from './privateRoute';
const StudentRoutes = () => {
    return (
        <Routes>
            <Route path="/students/dashboard" element={<PrivateRoute element={<StudentDashboard/>} />} />
            <Route path="/students/profile" element={<PrivateRoute element={<StudentProfile/>} />} />
        </Routes>
    )
}
export default StudentRoutes;
