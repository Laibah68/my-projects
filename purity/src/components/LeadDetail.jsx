import { FaPhoneAlt, FaEnvelope, FaPaperPlane, FaTimes } from "react-icons/fa";
import ActionButton from "./ActionButton";
import { useState } from "react";
import MessageCard from "./MessageCard";
import DetailCard from "./DetailCard";
import TimelineView from "./TimeLineView";

export default function LeadDetail({ lead }) {
  const [activeTab, setActiveTab] = useState("Text");
  const [newMessage, setNewMessage] = useState("");

  const dummyMessages = [
    { sender: "You", message: "Hey Malcom, just sent you an email to schedule a demo.", timestamp: "10/11/2020 8:05 AM" },
    { sender: "Other", message: "Thanks Joe, I’ll check and get back to you.", timestamp: "10/11/2020 8:06 AM" },
    { sender: "You", message: "Let me know what info you'd like meanwhile.", timestamp: "10/11/2020 8:07 AM" },
    { sender: "Other", message: "Sure, send me pricing details.", timestamp: "10/11/2020 8:08 AM" },
  ];

  return (
    <div className="p-2 w-full">
      {/* 🧭 Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <h2 className="text-lg sm:text-xl font-bold">{lead.name}</h2>
          <p className="text-xs sm:text-sm text-gray-500">
            Dashboard / Leads / {lead.name}
          </p>
        </div>
        <div className="text-xs sm:text-sm text-gray-500">
          Campaign was manually stopped.
        </div>
      </div>

      {/* 🧩 Lead Info Block */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mt-3 mb-1 bg-white p-2 sm:p-3 rounded shadow-sm">
        {/* Left: Contact Info */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-3">
            <div className="bg-teal-500 p-3 rounded text-white text-sm">
              <FaPhoneAlt />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[11px] sm:text-xs font-semibold">{lead.contact}</div>
              <div className="text-[11px] sm:text-xs font-semibold">{lead.name}@mail.com</div>
            </div>
          </div>

          {/* Assigned User */}
          <div className="flex flex-col gap-1 sm:ml-3">
            <span className="text-[11px] sm:text-xs font-semibold">Assigned User</span>
            <select className="border rounded px-2 py-1 text-[11px] sm:text-xs w-full sm:w-[180px]">
              <option>Jonathan</option>
              <option>Eric</option>
              <option>Malcom</option>
            </select>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-wrap justify-start sm:justify-end gap-2 w-full sm:w-auto">
          <ActionButton label="Details" />
          <ActionButton label="Transfer" />
          <ActionButton label="Delete" />
          <ActionButton label="Assign" />
        </div>
      </div>

      {/* 🧱 Tabs */}
      <div className="py-2 px-2 w-full bg-white rounded shadow-sm">
        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-2">
          {["Text", "Email", "Detail", "Timeline"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm sm:text-base font-semibold px-3 py-1 rounded ${
                activeTab === tab
                  ? "bg-teal-100 text-teal-700 border border-teal-500"
                  : "text-gray-500 hover:text-teal-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 🗨 Text Tab */}
        {activeTab === "Text" && (
          <div className="flex flex-col h-[200px] sm:h-[190px]">
            <div className="flex-1 overflow-y-scroll scrollbar-hide pr-1">
              {dummyMessages.map((msg, i) => (
                <MessageCard
                  key={i}
                  sender={msg.sender}
                  message={msg.message}
                  timestamp={msg.timestamp}
                />
              ))}

              {newMessage && (
                <MessageCard sender="You" message={newMessage} timestamp="Now" />
              )}
            </div>

            <div className="flex items-center gap-2 border-t pt-1">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 border rounded px-2 py-1 text-xs sm:text-sm"
                placeholder="Enter Text Message"
              />
              <button className="bg-teal-500 text-white px-3 py-2 rounded">
                <FaPaperPlane className="text-white text-sm" />
              </button>
            </div>
          </div>
        )}

        {/* 📧 Email Tab */}
        {activeTab === "Email" && (
          <div className="bg-white rounded h-[200px] flex flex-col">
            <div className="flex-1 overflow-y-auto scrollbar-hide px-2 py-2">
              <div className="bg-gray-100 rounded-xl px-3 py-2 text-[11px] sm:text-xs text-gray-800 leading-relaxed w-fit max-w-[95%] sm:max-w-[65%]">
                <div className="space-y-2">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                  </p>
                  <p>
                    It has survived not only five centuries, but also the leap into electronic typesetting...
                  </p>
                </div>

                <div className="bg-[#38495B] text-white text-xs py-4 px-2 rounded flex flex-col items-center gap-3 mt-3">
                  <div className="text-center text-[12px] sm:text-[13px]">
                    Contact Us at bryan.hays@profinancial.com
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-white p-1 rounded">
                      <FaEnvelope className="text-[#38495B]" />
                    </div>
                    <div className="bg-white p-1 rounded">
                      <FaPhoneAlt className="text-[#38495B]" />
                    </div>
                    <div className="bg-white p-1 rounded">
                      <FaPaperPlane className="text-[#38495B]" />
                    </div>
                  </div>
                  <div className="bg-red-500 flex items-center px-3 py-1 rounded gap-2">
                    <span className="bg-white rounded-full p-1">
                      <FaTimes className="text-red-500 text-xs" />
                    </span>
                    <span className="text-white text-xs sm:text-sm">Unsubscribe</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t px-2 py-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 border rounded px-2 py-1 text-xs sm:text-sm"
                  placeholder="Enter Text Message"
                />
                <button className="bg-teal-500 text-white px-3 py-2 rounded text-sm">
                  <FaPaperPlane className="text-white text-sm" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 📋 Detail Tab */}
        {activeTab === "Detail" && (
          <div className="p-2 h-[200px] overflow-y-auto scrollbar-hide">
            <DetailCard
              leftRows={["Step 4 of 5", "Failed", "2 days ago"]}
              rightRows={[
                `Hey ${lead.name}, it’s Pat from deft sales, just sent you an email to schedule a demo.`,
              ]}
            />

            <DetailCard
              leftRows={["Step 3 of 5", "Failed", "3 days ago"]}
              rightRows={[
                "How fast was that?",
                "Hey",
                "Are you tired of missing out on new leads?",
              ]}
            />

            <DetailCard
              leftRows={["Step 2 of 5", "Successful", "4 days ago"]}
              rightRows={[
                `Hey ${lead.name}, it’s Pat from deft sales, just sent you an email to schedule a demo.`,
              ]}
            />
          </div>
        )}

        {/* 🕒 Timeline Tab */}
        {activeTab === "Timeline" && (
          <div className="h-[200px] overflow-y-auto scrollbar-hide">
            <TimelineView />
          </div>
        )}
      </div>
    </div>
  );
}
