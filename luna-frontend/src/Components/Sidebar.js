import "./styles.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="container">
                <div className="sidebar-item1">
                    <a href="*" className="home">Home</a>
                </div>
                <div className="sidebar-item2">
                    <a href="*" className="about">About</a>
                </div>
                <div className="sidebar-item3">
                    <a href="*" className="contact">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;