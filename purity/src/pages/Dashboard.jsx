import Topbar from "../components/Topbar";
import PageHeader from "../components/Header";
import Card from "../components/Card";
import FilterBar from "../components/FilterBar";
import Sidebar from "../components/Sidebar";
import Leads from "./Leads";
import {
  FaEnvelope,
  FaCommentDots,
  FaPhone,
  FaCalendarAlt,
  FaUser,
  FaMobileAlt,
  FaPhoneAlt,
  FaSms,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(false);

  const user = { name: "Jonathan", role: "Super Admin" };
  const stats = { leads: 18, messages: 129 };
  const stats1 = { leads: 13, messages: 153 };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setShowSidebar(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabSelect = (label) => {
    setActiveTab(label);
    if (isMobile) setShowSidebar(false);
  };

  const renderHeader = () => {
    if (activeTab === "Dashboard") {
      return (
        <PageHeader
          title={
            <>
              Welcome to your <span className="text-teal-500">Dashboard</span>
            </>
          }
          subtitle="Dashboard"
          stats={stats}
        />
      );
    } else if (activeTab === "Leads") {
      return (
        <PageHeader
          title={
            <>
              Welcome to your Nuturing <span className="text-teal-500">Leads</span>
            </>
          }
          subtitle="Dashboard / Leads"
          stats={stats1}
        />
      );
    } else {
      return (
        <PageHeader
          title={
            <>
              Welcome to <span className="text-teal-500">{activeTab}</span>
            </>
          }
          subtitle={`Dashboard / ${activeTab}`}
          stats={stats}
        />
      );
    }
  };

  const renderContent = () => {
    if (activeTab === "Dashboard") {
      return (
        <div className="flex-1 py-2 px-4 sm:px-6 md:px-8 bg-gray-100 overflow-y-auto">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">Lead Responses</h3>
          <p className="mb-2 text-xs sm:text-sm md:text-base text-gray-500">
            Use these links to go directly to their related pages.
          </p>
          <div className="grid grid-cols-1 gap-4 mb-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <Card title="New Emails" value="3" subtitle="Lifetime Total: 3" icon={<FaEnvelope className="text-xl text-white" />} />
            <Card title="New Texts" value="0" subtitle="Lifetime Total: 7" icon={<FaCommentDots className="text-xl text-white" />} />
            <Card title="New Call Backs" value="0" subtitle="Lifetime Total: 0" icon={<FaPhone className="text-xl text-white" />} />
            <Card title="New Meetings Booked" value="0" subtitle="Lifetime Total: 0" icon={<FaCalendarAlt className="text-xl text-white" />} />
          </div>

          <hr className="my-4" />

          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold">Business Data</h3>
            <FilterBar />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            <Card title="Leads Total" value="5" subtitle="" icon={<FaUser className="text-xl text-white" />} />
            <Card title="Emails Sent" value="0" subtitle="" icon={<FaMobileAlt className="text-xl text-white" />} />
            <Card title="Completed Next Calls" value="0" subtitle="" icon={<FaMobileAlt className="text-xl text-white" />} />
            <Card title="Completed Fast Calls" value="0" subtitle="" icon={<FaPhoneAlt className="text-xl text-white" />} />
            <Card title="Text Sent" value="3" subtitle="" icon={<FaSms className="text-xl text-white" />} />
          </div>
        </div>
      );
    } else if (activeTab === "Leads") {
      // return <Leads />;
      return <Leads isSidebarHidden={!showSidebar} />;
    } else {
      return (
        <div className="p-4 sm:p-6 md:p-8">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold">{activeTab}</h3>
          <p className="text-sm text-gray-500">
            This section is under construction. You can add content for <strong>{activeTab}</strong> here.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="relative flex w-full min-h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {isMobile && showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        active={activeTab}
        onSelect={handleTabSelect}
        isOpen={showSidebar}
        isMobile={isMobile}
        className={`transition-all duration-300 ${
          isMobile ? "absolute z-50 top-0 left-0 h-full w-64 bg-white shadow-lg" : ""
        }`}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col max-h-screen overflow-y-auto">
        {/* Topbar */}
        <div className="bg-white shadow sticky top-0 z-10">
          <Topbar
            user={user}
            onHamburgerClick={() => setShowSidebar((prev) => !prev)}
            onDropdownClick={() => setShowDropdown((prev) => !prev)}
          />
        </div>

        {/* Dynamic Header */}
        <div className="bg-white shadow-sm sticky top-[46px] z-30">
          {renderHeader()}
        </div>

        {/* Account Dropdown */}
        {showDropdown && (
          <div className="absolute z-50 w-48 p-4 bg-white rounded shadow-md top-14 right-4 sm:right-6 md:right-8">
            <p className="mb-2 font-semibold">Account</p>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-blue-600">View Profile</li>
              <li className="cursor-pointer hover:text-blue-600">Edit Profile</li>
              <li className="cursor-pointer hover:text-red-600">Logout</li>
            </ul>
          </div>
        )}

        {/* Tab Content */}
        {renderContent()}
      </div>
    </div>
  );
}
