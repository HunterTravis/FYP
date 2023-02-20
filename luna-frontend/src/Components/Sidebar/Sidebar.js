import "./Sidebar.css"
import { Link } from 'react-router-dom';
import DashboardIcon from "@mui/icons-material/Dashboard";
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
import AssignmentLate from "@mui/icons-material/AssignmentLate";
import TokenIcon from '@mui/icons-material/Token';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="container">
                <Link to="/registration" className="Sidebar-buttons">
                    <div className="sidebar-item"><AppRegistrationIcon /> Course Registration</div>
                </Link>
                <Link to="/attendance" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <AutoGraphIcon /> Attendance
                    </div>
                </Link>
                <Link to="/courses" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <TokenIcon /> Courses
                    </div>
                </Link>
                <Link to="/marks" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <CheckIcon /> Marks
                    </div>
                </Link>
                <Link to="/transcript" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <TextSnippetIcon /> Transcript
                    </div>
                </Link>
                <Link to="/fee-challan" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <AttachMoneyIcon /> Fee Challan
                    </div>
                </Link>
                <Link to="/fee-details" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <MoreIcon /> Fee Details
                    </div>
                </Link>
                <Link to="/feedback" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <FeedbackIcon /> Course Feedback
                    </div>
                </Link>
                <Link to="/withdraw" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <ArrowBackIcon /> Course Withdraw
                    </div>
                </Link>
                <Link to="/grade-change" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <UpgradeIcon /> Grade Change Request
                    </div>
                </Link>
                <Link to="/plan" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <NextPlanIcon /> Tentative Study Plan
                    </div>
                </Link>
                {/* <div className="sidebar-item">
                <Link to="/card-change">Card Issue Request</Link>
                </div> */}
                <Link to="/assignments" className="Sidebar-buttons">
                    <div className="sidebar-item">
                        <AssignmentLateIcon /> Assignments
                    </div>
                </Link>

            </div>
        </div>
    );
}

export default Sidebar;