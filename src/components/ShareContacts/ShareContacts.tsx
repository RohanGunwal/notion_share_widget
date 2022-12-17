import React, { useState } from "react";
import { groups, users } from "../../utils/data";
import ModalFooter from "../Footer/ModalFooter/ModalFooter";
import ModalSearchBar from "../UI/SearchBar/ModalSearchBar/ModalSearchBar";

export default function ShareContacts() {
  const [selectContacts, setSelectContacts] = useState<
    Array<{
      name: string;
      imageSrc?: string;
      id: string;
      email?: string;
      quantity?: number;
    }>
  >([]);

  const [activeContact, setActiveContact] = useState<number>(-1);

  const [searchSuggestions, setSearchSuggestions] = useState<
    Array<{
      name: string;
      imageSrc?: string;
      id: string;
      email?: string;
      quantity?: number;
    }>
  >([...users, ...groups]);

  const [groupStartIndex, setGroupStartIndex] = useState<number>(users.length);

  return (
    <div className="w-full border border-gray-300 rounded-lg shadow-lg focus:outline-none">
      <ModalSearchBar
        selectContacts={selectContacts}
        setSelectContacts={setSelectContacts}
        setGroupStartIndex={setGroupStartIndex}
        setSearchSuggestions={setSearchSuggestions}
      />
      <div className="" onMouseLeave={() => setActiveContact(-1)}>
        {searchSuggestions.map((ele, index) => {
          return (
            <div key={ele.id}>
              {index === groupStartIndex ? (
                <div>
                  <span>Select a group</span>
                </div>
              ) : index === 0 ? (
                <div className="text-gray-700 font-semibold">
                  Select a person
                </div>
              ) : (
                ""
              )}
              <div
                className={`flex items-center p-2 ${
                  activeContact === index ? "bg-gray-200" : "bg-white"
                }rounded-md cursor-pointer`}
                onClick={() => {
                  if (!selectContacts.includes(ele)) {
                    let updatedArray = [...selectContacts, ele];
                    setSelectContacts(updatedArray);
                  }
                }}
                onMouseEnter={() => {
                  setActiveContact(index);
                }}
                key={ele.id}
              >
                {ele.imageSrc ? (
                  <img
                    src={ele.imageSrc}
                    className="object-contain w-5 h-5 rounded-full"
                  />
                ) : (
                  <span className="flex items-center justify-center w-5 h-5 text-xs text-white rounded-md bg-gray-400">
                    {ele.name.substring(0, 1)}
                  </span>
                )}
                <span className="ml-3 text-gray-500 text-sm font-semibold">
                  {ele.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <ModalFooter />
    </div>
  );
}
