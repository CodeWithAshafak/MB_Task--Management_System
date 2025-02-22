import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../CSS/AdminDashboard.css";

import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { FaBars, FaTimes, FaHome, FaPlus, FaTable,FaEdit, FaSignOutAlt } from "react-icons/fa";

const AdminDashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className={`sidebar ${menuOpen ? "show" : ""}`}>
                <div className="sidebar-header">
                   
                    <FaTimes className="close-menu" onClick={() => setMenuOpen(false)} />
                </div>
                <ul className="sidebar-menu">
                    <li><Link to="#" className="active"><FaHome /> Dashboard</Link></li>
                    <li><Link to="create employee"><FaPlus /> Create Employee</Link></li>
                    <li><Link to="assign task"><FaTable />Assign Task</Link></li>
                    <li><Link to="empreport"><MdOutlineProductionQuantityLimits />Employee Report</Link></li>
                    <li><Link to="/" className="logout"><FaSignOutAlt /> Logout</Link></li>
                </ul>
            </div>

            {/* Main Content */}
            <div className={`main-content ${menuOpen ? "full" : ""}`}>
                <header>
                    <FaBars className="menu-toggle" onClick={() => setMenuOpen(true)} />
                    <h3> Admin DashBoard </h3>
                    {/* <div className="user-info">
                        <img src={user} alt="User Icon" className="user-icon" />
                    </div> */}
                </header>
                <main>
                    <div className="scrollable-content">
                    <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboard;
