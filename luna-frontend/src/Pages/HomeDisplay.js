const HomeDisplay = () => {
  return (
    <>
      <div className="home"></div>
      <div className="DisplayContainer">
        <h1 id="home-greeting">Welcome back | Student Profile</h1>
        <div className="sidebar">
          <div className="container">
            <div className="sidebar-item">
              <a href="*" className="registration">
                Course Registration
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="attendance">
                Attendance
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="marks">
                Marks
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="transcript">
                Transcript
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="fee-challan">
                Fee Challan
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="fee-details">
                Fee Details
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="feedback">
                Course Feedback
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="withdraw">
                Course Withdraw
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="grade-change">
                Grade Change Request
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="plan">
                Tentative Study Plan
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="assignments">
                Assigments
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="card-change">
                Card Issue Request
              </a>
            </div>
            <div className="sidebar-item">
              <a href="*" className="repository">
                Course Repository
              </a>
            </div>
          </div>
        </div>
        <div className="home-current-info">
          <h2 className="current-class">University Information</h2>
          <h3 className="current-class">Roll No: 19k-1107</h3>
          <h3 className="current-class">Section: A </h3>
          <h3 className="current-class">Degree: BS(SE)</h3>
          <h3 className="current-class">Campus: Karachi</h3>
          <h3 className="current-class">Batch: 2019</h3>
          <h3 className="current-class">Status: Current</h3>
        </div>

        <div className="personal-info">
          <h2 className="current-class">Personal Information</h2>
          <h3 className="current-class">Name: Fatima Jamal</h3>
          <h3 className="current-class">Gender: Female</h3>
          <h3 className="current-class">DOB:2/17/2002 </h3>
          <h3 className="current-class">CNIC: 42101-7940063-8</h3>
          <h3 className="current-class">Email: k191107@nu.edu.pk</h3>
          <h3 className="current-class">Mobile NO: 0316-8716232</h3>
        </div>

        <div className="contact-info">
          <h2 className="current-class">Contact Information</h2>
          <h3 className="current-class">Address: FB Area Block 9.</h3>
          <h3 className="current-class">Postal code: 85950</h3>
          <h3 className="current-class">City: Karachi</h3>
          <h3 className="current-class">Country: Pakistan</h3>
          <h3 className="current-class">CNIC: 42101-7940063-8</h3>
          <h3 className="current-class">Mobile No: 0316-8716232</h3>
        </div>

        <div className="family-info">
          <h2 className="current-class">Family Information</h2>
          <h3 className="current-class">Father's CNIC: 42101-7940063-8</h3>
          <h3 className="current-class">Mother's CNIC: 42101-7940063-8</h3>
        </div>

        <div id="path">
          <h2>Education path</h2>
          <div id="path-graphic-container">
            <img
              id="path-graphic"
              src="https://recess-images.imgix.net/icons/general/education_path.svg?ixlib=rails-2.1.4&auto=compress%2Cformat"
            />
          </div>
          <div id="path-info-container">
            <h4 id="prior-number">Credits acquired.</h4>
            <h4 id="remaing-number">Credits Remaining.</h4>
          </div>
        </div>
        <div id="help-section">
          <h2>Help</h2>
          <div>
            <a href="#">FAQ</a>
          </div>
          <div>
            <a href="#">Contact us</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDisplay;
