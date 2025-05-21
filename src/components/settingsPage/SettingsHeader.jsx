import React from "react";
import { LogOut } from "lucide-react";
import "./SettingsHeader.css";

const SettingsHeader = () => {
  return (
    <header className="settings-header">
      <div className="settings-header-title">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Customize your experience</p>
      </div>
      <button className="settings-logout-button">
        <LogOut className="settings-logout-icon" />
        Logout
      </button>
    </header>
  );
};

export default SettingsHeader;