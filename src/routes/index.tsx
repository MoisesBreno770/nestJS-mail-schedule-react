import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardPage, WriteNowPage } from "../pages";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<DashboardPage/>}></Route>
                <Route path="/escrever-agora" element={<WriteNowPage/>}></Route>
            </Routes>
        </Router>
    );
}