import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/HomeDisplay";
import CourseRegistration from "./Pages/CourseRegistration";
import Assignments from "./Pages/Assignments";
import { Routes, Route } from "react-router-dom";
import Attendance from "./Pages/Attendance";
import CardIssueRequest from "./Pages/CardIssueRequest";
import CourseFeedback from "./Pages/CourseFeedback";
import CourseRepository from "./Pages/CourseRepository";
import CourseWithdraw from "./Pages/CourseWithdraw";
import FeeChallan from "./Pages/FeeChallan";
import FeeDetails from "./Pages/FeeDetails";
import Marks from "./Pages/Marks";
import TentativeStudyPlan from "./Pages/TentativeStudyPlan";
import GradeChangeRequest from "./Pages/GradeChangeRequest";
import Transcript from "./Pages/Transcript";
import SidebarLayout from "./Components/SidebarLayout";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<CourseRegistration />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/card-change" element={<CardIssueRequest />} />
          <Route path="/feedback" element={<CourseFeedback />} />
          <Route path="/repository" element={<CourseRepository />} />
          <Route path="/withdraw" element={<CourseWithdraw />} />
          <Route path="/fee-challan" element={<FeeChallan />} />
          <Route path="/fee-details" element={<FeeDetails />} />
          <Route path="/marks" element={<Marks />} />
          <Route path="/plan" element={<TentativeStudyPlan />} />
          <Route path="/grade-change" element={<GradeChangeRequest />} />
          <Route path="/transcript" element={<Transcript />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
