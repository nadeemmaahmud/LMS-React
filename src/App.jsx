import { Route, Routes } from "react-router";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Courses from "./components/Courses";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage/>} />
        
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:id" element={<CoursePage/>} />

        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />

        <Route
          path="/protected/dashboard"
          element={<div>PROTECTED Dashboard</div>}
        />
        <Route
          path="/protected/dashboard2"
          element={<div>PROTECTED Dashboard 2</div>}
        />

        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
