"use client";
import React, { useState } from "react";
import Sidebar from "@/components/user/userDashboard/sidebar";
import Dashboardheader from "@/components/user/userDashboard/dashboardheader";
import Profile from "@/components/user/profile/profile";
import Documents from "@/components/user/documents/documents";

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderPage = () => {
    switch (activeTab) {
      case "profile":
        return <Profile />;
      case "documents":
        return <Documents />;
      default:
        return <div className="p-4">Please select a page</div>;
    }
  };

  return (
    <div className="flex">

      <div className="fixed top-0 left-0 h-screen w-72 z-50">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="ml-72 flex-1 min-h-screen bg-gray-100">
        <div className="w-full">
          <Dashboardheader />
        </div>

        {/* Page content */}
        <div className="p-6">{renderPage()}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
