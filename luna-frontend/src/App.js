import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Login from "./Pages/Login";
// import Dashboard from "./Pages/dashboard/index";
import StudentHome from "./Pages/Home/Home";
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
import TeacherHome from "./Teacher/Home";
import TeacherAttendance from "./Teacher/Attendance";
import TeacherCourses from "./Teacher/Courses/Courses";
import TeacherMarks from "./Teacher/Marks";
import TeacherGradeChangeRequest from "./Teacher/GradeChangeRequest";
import ProtectedRoute from "./Components/ProtectedRoute";
import TeacherCoursePage from "./Teacher/CoursePage/CoursePage";

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
              {/* <Route
                path="/dashboard"
                element={<ProtectedRoute Component={Dashboard} />}
              /> */}
              <Route
                path="/student-home"
                element={<ProtectedRoute Component={StudentHome} />}
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
              {/* <Route
                path="/card-change"
                element={<ProtectedRoute Component={Dashboard} />}
              /> */}
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
              <Route
                path="/teacher-home"
                element={<ProtectedRoute Component={TeacherHome} />}
              />
              <Route
                path="/teacher-attendance"
                element={<ProtectedRoute Component={TeacherAttendance} />}
              />
              <Route
                path="/teacher-courses"
                element={<ProtectedRoute Component={TeacherCourses} />}
              />
              <Route
                path="/teacher-marks"
                element={<ProtectedRoute Component={TeacherMarks} />}
              />
              <Route
                path="/teacher-grade-change"
                element={
                  <ProtectedRoute Component={TeacherGradeChangeRequest} />
                }
              />
              <Route
                path="/teacher-course-page"
                element={<ProtectedRoute Component={TeacherCoursePage} />}
              />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
