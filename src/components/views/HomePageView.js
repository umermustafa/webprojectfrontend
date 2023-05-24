import { Link } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file for styling

const HomePageView = () => {
    return (
        <div>
            <h1 className="title">Task Manager</h1>
            <div className="links">
                <div className="link-container">
                    <Link to={'/employees'} className="link">Employees</Link>
                </div>
                <div className="link-container">
                    <Link to={'/tasks'} className="link">Tasks</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePageView;
