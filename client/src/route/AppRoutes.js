import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Dashboard } from "../admin/Dashboard";
import { Profile } from "../admin/Profile";
import { Student } from "../students/Student";

export const AppRoutes = () => {
    return <>
    
    <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/student/create" element={<Student />} />
    </Routes>
    
    </>
}