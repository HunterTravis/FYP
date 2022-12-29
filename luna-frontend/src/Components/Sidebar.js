import "./styles.css"
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="container">
                <div className="sidebar-item1">
                    <Link to="/home">Home</Link>
                </div>
                <div className="sidebar-item">
                    <Link to="/registration">Course Registration</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/attendance">Attendance</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/courses">Courses</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/marks">Marks</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/transcript">Transcript</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/fee-challan">Fee Challan</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/fee-details">Fee Details</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/feedback">Course Feedback</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/withdraw">Course Withdraw</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/grade-change">Grade Change Request</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/plan">Tentative Study Plan</Link>
                </div>
                <div className="sidebar-item">
                <Link to="/card-change">Card Issue Request</Link>
                </div>
                <div className="sidebar-item">
                    <Link to="/assignments">Assignments</Link>
                </div>
                
            </div>
        </div>
    );
}

export default Sidebar;