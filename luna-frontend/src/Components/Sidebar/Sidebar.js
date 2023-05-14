import "./Sidebar.css";
import { Link } from "react-router-dom";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import CheckIcon from "@mui/icons-material/Check";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MoreIcon from "@mui/icons-material/More";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
// import AssignmentLate from "@mui/icons-material/AssignmentLate";
import TokenIcon from "@mui/icons-material/Token";

const Sidebar = ({ role }) => {
  if (role === "student") {
    return (
      <div className="sidebar">
        <Link to="/registration" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <AppRegistrationIcon />
            </div>
            <div className="sidebar-text">Course Registration</div>
          </div>
        </Link>
        <Link to="/attendance" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <AutoGraphIcon />
            </div>
            <div className="sidebar-text" align="left">
              Attendance
            </div>
          </div>
        </Link>
        <Link to="/courses" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <TokenIcon />
            </div>
            <div className="sidebar-text">Courses</div>
          </div>
        </Link>
        <Link to="/marks" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <CheckIcon />
            </div>
            <div className="sidebar-text">Marks</div>
          </div>
        </Link>
        <Link to="/transcript" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <TextSnippetIcon />
            </div>
            <div className="sidebar-text">Transcript</div>
          </div>
        </Link>
        <Link to="/fee-challan" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <AttachMoneyIcon />
            </div>
            <div className="sidebar-text">Fee Challan</div>
          </div>
        </Link>
        <Link to="/fee-details" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <MoreIcon />
            </div>
            <div className="sidebar-text">Fee Details</div>
          </div>
        </Link>
        <Link to="/feedback" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <FeedbackIcon />
            </div>
            <div className="sidebar-text">Course Feedback</div>
          </div>
        </Link>
        <Link to="/withdraw" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <ArrowBackIcon />
            </div>
            <div className="sidebar-text">Course Withdraw</div>
          </div>
        </Link>
        <Link to="/grade-change" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <UpgradeIcon />
            </div>
            <div className="sidebar-text">Grade Change Request</div>
          </div>
        </Link>
        <Link to="/plan" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <NextPlanIcon />
            </div>
            <div className="sidebar-text">Tentative Study Plan</div>
          </div>
        </Link>
        {/* <div className="sidebar-item" tabIndex={-1}>
                <Link to="/card-change">Card Issue Request</Link>
                </div> */}
        <Link to="/assignments" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <AssignmentLateIcon />
            </div>
            <div className="sidebar-text">Assignments</div>
          </div>
        </Link>
      </div>
    );
  } else if (role === "teacher") {
    return (
      <div className="sidebar">
        <Link to="/teacher-attendance" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <AutoGraphIcon />
            </div>
            <div className="sidebar-text" align="left">
              Attendance
            </div>
          </div>
        </Link>
        <Link to="/teacher-courses" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <TokenIcon />
            </div>
            <div className="sidebar-text">Courses</div>
          </div>
        </Link>
        <Link to="/teacher-marks" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <CheckIcon />
            </div>
            <div className="sidebar-text">Marks</div>
          </div>
        </Link>
        <Link to="/teacher-grade-change" className="sidebar-link">
          <div className="sidebar-item" tabIndex={-1}>
            <div className="sidebar-icon">
              <UpgradeIcon />
            </div>
            <div className="sidebar-text">Grade Change Request</div>
          </div>
        </Link>
      </div>
    );
  }
};

export default Sidebar;
