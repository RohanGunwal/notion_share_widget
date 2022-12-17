import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React, { useState } from "react";
import { useDataContext } from "../../../../contexts/DataContext";
import { groups, options, users } from "../../../../utils/data";

const ModalSearchBar = ({
  selectContacts,
  setSelectContacts,
  setGroupStartIndex,
  setSearchSuggestions,
}: {
  selectContacts: Array<{
    name: string;
    imageSrc?: string;
    id: string;
    email?: string;
    quantity?: number;
  }>;
  setSelectContacts: Function;
  setGroupStartIndex: Function;
  setSearchSuggestions: Function;
}) => {
  const [option, setOption] = useState<string>("Full access");

  const { setModalState, setData }: any = useDataContext();

  const fetchSearchSuggestions = (searchText: string) => {
    let reg = new RegExp(searchText, "i");
    let arrayOfSuggestions: Array<{ name: string; imageSrc?: string }> = [];

    users.forEach((user) => {
      if (reg.test(user.name)) {
        arrayOfSuggestions.push(user);
      }
    });

    setGroupStartIndex(arrayOfSuggestions.length);

    groups.forEach((group) => {
      arrayOfSuggestions.push(group);
    });

    setSearchSuggestions(arrayOfSuggestions);
  };

  return (
    <div className="flex items-center px-4 py-2 justify-between">
      <div className="flex flex-wrap grow w-[60%]">
        {selectContacts.map((contact, index) => {
          const { name, id } = contact;
          return (
            <div
              key={id}
              className="flex items-center text-xs px-2 py-1 rounded mr-1 my-1"
            >
              {name}
              <img
                className="w-2 h-2 object-contain ml-2 cursor-pointer"
                src="/assets/Images/cross.svg"
                onClick={() => {
                  selectContacts.splice(index, 1);
                  setSelectContacts([...selectContacts]);
                }}
                alt=""
              />
            </div>
          );
        })}
        <input
          type="text"
          className="bg-transparent text-gray-500 focus:outline-none text-sm w-full"
          placeholder={
            selectContacts.length === 0 ? "Search emails, names or groups" : ""
          }
          onChange={(e) => {
            fetchSearchSuggestions(e.target.value);
          }}
        ></input>
      </div>
      <Menu placement="bottom">
        <MenuButton>
          <div className="flex items-center text-gray-500 cursor-pointer">
            <span
              className={`text-xs ${
                option === "No access" ? "text-red-400" : "text-gray-500"
              }`}
            >
              {option}
            </span>
            <img
              className="object-contain mx-2 w-2 h-2"
              src="/assets/Images/caret-down.svg"
            ></img>
          </div>
        </MenuButton>
        <MenuList className="text-sm">
          {options.map((option) => (
            <MenuItem
              minH="30px"
              onClick={() => {
                setOption(option);
              }}
              key={option}
            >
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <button
        className="bg-white px-3 py-2 rounded-md border border-gray-300 text-sm"
        onClick={() => {
          if (selectContacts.length > 0) {
            setData(selectContacts, option);
            setModalState(false);
          }
        }}
      >
        Invite
      </button>
    </div>
  );
};

export default ModalSearchBar;
