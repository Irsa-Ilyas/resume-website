
"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaRegBell, FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import user from "media/builderIcons/user.svg";

type SearchItem = {
  id: number;
  name: string;
};

const searchData: SearchItem[] = [
  { id: 1, name: "Resume Builder" },
  { id: 2, name: "Cover Letter Generator" },
  { id: 3, name: "Job Tracker" },
  { id: 4, name: "AI Review" },
  { id: 5, name: "Templates" },
];

const userData = {
  name: "John Doe",
  email: "johndoe@example.com",
};

const Dashboardheader = () => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<SearchItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    const results = searchData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(results);
  };

  const handleSelect = (name: string) => {
    setQuery(name);
    setFilteredData([]);
    console.log("Selected:", name);
  };

  return (
    <div className="flex justify-between items-center bg-white p-6  shadow-sm relative z-20">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome, {userData.name}
        </h1>
      </div>

      <div className="flex items-center gap-4 mr-6">
        
        <div className="relative w-72 hidden sm:block text-lg text-black">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
            className="pl-10 pr-4 py-2 border bg-[#F3F4F6] rounded-full w-full focus:outline-none focus:ring-1 focus:ring-purple-400"
          />
          <FiSearch className="absolute left-3 top-[46%] transform -translate-y-1/2 text-gray-400 text-xl" />
          {query && filteredData.length > 0 && (
            <ul className="absolute left-0 right-0 mt-2 bg-white shadow-lg rounded-md z-30 max-h-60 overflow-y-auto">
              {filteredData.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleSelect(item.name)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="p-2 bg-gray-100 rounded-full hover:bg-red-100 cursor-pointer">
          <FaRegBell className="text-xl text-gray-600 hover:text-purple-500" />
        </div>
        <div className="relative">
          <div
            className="flex items-center gap-2 pl-4 border-l border-gray-300 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <Image
              src={user}
              alt="User"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
            <p className="text-lg font-medium text-gray-700">{userData.name}</p>
            <FaAngleDown className="text-gray-600" />
          </div>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
              <p className="text-md font-semibold text-black mb-2">
                {userData.name}
              </p>
              <p className="text-md font-medium text-blue-500">
                {userData.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboardheader;