import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./Pages/global/Topbar";
import Login from "./Pages/Login";
import Dashboard from "./Pages/dashboard/index";
import ProfileInformation from "./Pages/ProfileInformation";
import CourseRegistration from "./Pages/CourseRegistration";
import Assignments from "./Pages/Assignments/Assignments";
import { Routes, Route } from "react-router-dom";
import Attendance from "./Pages/Attendance";
import CardIssueRequest from "./Pages/CardIssueRequest";
import CourseFeedback from "./Pages/CourseFeedback";
import CourseWithdraw from "./Pages/CourseWithdraw";
import FeeChallan from "./Pages/FeeChallan";
import FeeDetails from "./Pages/FeeDetails";
import Marks from "./Pages/Marks";
import TentativeStudyPlan from "./Pages/TentativeStudyPlan";
import GradeChangeRequest from "./Pages/GradeChangeRequest";
import Transcript from "./Pages/Transcript";
import Courses from "./Pages/Courses/Courses";
import Layout from "./Components/Layout/Layout";
import CoursePage from "./Pages/CoursePage/CoursePage";
import AssignmentSubmission from "./Pages/AssignmentSubmission/AssignmentSubmission";
import { useLocation } from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* {useLocation().pathname !== "/" ? <Topbar/>:null} */}

          <Routes>
            <Route path="/" element={<Login />} />

            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/ProfileInformation"
                element={<ProfileInformation />}
              />
              <Route path="/registration" element={<CourseRegistration />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/card-change" element={<CardIssueRequest />} />
              <Route path="/feedback" element={<CourseFeedback />} />
              <Route path="/withdraw" element={<CourseWithdraw />} />
              <Route path="/fee-challan" element={<FeeChallan />} />
              <Route path="/fee-details" element={<FeeDetails />} />
              <Route path="/marks" element={<Marks />} />
              <Route path="/plan" element={<TentativeStudyPlan />} />
              <Route path="/grade-change" element={<GradeChangeRequest />} />
              <Route path="/transcript" element={<Transcript />} />
              <Route path="/coursePage" element={<CoursePage />} />
              <Route
                path="/assignmentSubmission"
                element={<AssignmentSubmission />}
              />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
