import React from 'react';

import {Route, Routes} from 'react-router-dom';

import TeacherDashboard from '../pages/teacher/teacherDashboard';
import TeacherProfile from '../pages/teacher/teacherProfile';

const TeacherRoutes = () => {
    return (
        <Routes>
            <Route path="/teachers/dashboard" element={<TeacherDashboard />} />
            <Route path="/teachers/profile" element={<TeacherProfile />} />
        </Routes>
    )
}

export default TeacherRoutes;