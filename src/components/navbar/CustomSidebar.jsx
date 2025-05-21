import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Target, 
  Calendar, 
  Users, 
  Settings, 
  Menu, 
  X 
} from "lucide-react";
import "./CustomSidebar.css";

const CustomSidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
  };

  const navItems = [
    { to: "/", icon: <Home />, label: "Dashboard" },
    { to: "/goals", icon: <Target />, label: "Goals & Tasks" },
    { to: "/Kalender", icon: <Calendar />, label: "Kalender" },
    { to: "/team", icon: <Users />, label: "Team" },
    { to: "/Inställningar", icon: <Settings />, label: "Inställningar" }
  ];

  return (
    <div className={`custom-sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="custom-sidebar-header">
        {isOpen ? (
          <div className="custom-sidebar-brand">
            <div className="custom-sidebar-logo">S</div>
            <span>SynergyFlow</span>
          </div>
        ) : (
          <div className="custom-sidebar-logo-small">S</div>
        )}
        <button onClick={toggleSidebar} className="custom-sidebar-toggle">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <nav className="custom-sidebar-nav">
        {navItems.map((item) => (
          <Link 
            key={item.to} 
            to={item.to}
            className={`custom-nav-item ${location.pathname === item.to ? "active" : ""} ${!isOpen ? "collapsed" : ""}`}
          >
            <div className="custom-nav-icon">{item.icon}</div>
            {isOpen && <span className="label">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {isOpen && (
        <div className="custom-sidebar-footer">
          <p className="custom-sidebar-info-title">PlanIt</p>
          <p className="custom-sidebar-info-subtitle">Building stronger teams</p>
        </div>
      )}
    </div>
  );
};

export default CustomSidebar;