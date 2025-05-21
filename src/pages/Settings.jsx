import { useState } from "react";
import "../index.css";
import ProfileSettings from "../components/settingsPage/ProfileSettings";
import SettingsHeader from "../components/settingsPage/SettingsHeader";
import AccountSettings from "../components/settingsPage/AccountSettings";
import SettingsTabs from "../components/settingsPage/SettingsTabs";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="settings-page">
      <SettingsHeader />
      <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Profile" && <ProfileSettings />}
      {activeTab === "Account" && <AccountSettings />}
    </div>
  );
};

export default Settings;