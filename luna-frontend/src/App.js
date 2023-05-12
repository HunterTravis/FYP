import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Login from "./Pages/Login";
import Dashboard from "./Pages/dashboard/index";
import ProfileInformation from "./Pages/ProfileInformation";
import CourseRegistration from "./Pages/CourseRegistration";
import Assignments from "./Pages/Assignments/Assignments";
import { Routes, Route } from "react-router-dom";
import Attendance from "./Pages/Attendance";
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
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<Layout />}>
              <Route
                path="/dashboard"
                element={<ProtectedRoute Component={Dashboard} />}
              />
              <Route
                path="/ProfileInformation"
                element={<ProtectedRoute Component={ProfileInformation} />}
              />
              <Route
                path="/registration"
                element={<ProtectedRoute Component={CourseRegistration} />}
              />
              <Route
                path="/assignments"
                element={<ProtectedRoute Component={Assignments} />}
              />
              <Route
                path="/attendance"
                element={<ProtectedRoute Component={Attendance} />}
              />
              <Route
                path="/courses"
                element={<ProtectedRoute Component={Courses} />}
              />
              <Route
                path="/card-change"
                element={<ProtectedRoute Component={Dashboard} />}
              />
              <Route
                path="/feedback"
                element={<ProtectedRoute Component={CourseFeedback} />}
              />
              <Route
                path="/withdraw"
                element={<ProtectedRoute Component={CourseWithdraw} />}
              />
              <Route
                path="/fee-challan"
                element={<ProtectedRoute Component={FeeChallan} />}
              />
              <Route
                path="/fee-details"
                element={<ProtectedRoute Component={FeeDetails} />}
              />
              <Route
                path="/marks"
                element={<ProtectedRoute Component={Marks} />}
              />
              <Route
                path="/plan"
                element={<ProtectedRoute Component={TentativeStudyPlan} />}
              />
              <Route
                path="/grade-change"
                element={<ProtectedRoute Component={GradeChangeRequest} />}
              />
              <Route
                path="/transcript"
                element={<ProtectedRoute Component={Transcript} />}
              />
              <Route
                path="/coursePage"
                element={<ProtectedRoute Component={CoursePage} />}
              />
              <Route
                path="/assignmentSubmission"
                element={<ProtectedRoute Component={AssignmentSubmission} />}
              />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
