import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import { options } from "../../utils/data";
import { useDataContext } from "../../contexts/DataContext";
import PopoverFooter from "../Footer/PopoverFooter/PopoverFooter";
import PopoverHeader from "../Header/PopoverHeader/PopoverHeader";
import InviteButton from "../UI/InviteButton/InviteButton";
import SearchBar from "../UI/SearchBar/SearchBar";

export default function SharePopover() {
  const {
    data,
    updateOption,
    isModalOpen,
    isPopoverOpen,
    setPopoverState,
    setModalState,
  }: any = useDataContext();

  //   console.log(isModalOpen);

  const setOption = (options: string, index: number) => {
    updateOption(options, index);
  };

  return (
    <Popover
      isOpen={isPopoverOpen}
      onClose={() => {
        if (!isModalOpen) {
          setPopoverState(false);
        }
      }}
      styleConfig={{ width: "unset" }}
    >
      <PopoverTrigger>
        <button
          className="rounded-lg px-5 py-2 bg-black text-white flex items-center gap-2 text-lg"
          onClick={() => {
            setPopoverState(!isPopoverOpen);
          }}
        >
          Share
          <img src="/assets/Images/share-nodes-solid.svg" className="w-5 h-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="content | w-96 border rounded-lg shadow-lg flex flex-col">
          <PopoverHeader />
          <section
            className="search_wrapper | flex border-t p-2"
            onClick={() => {
              setModalState(true);
            }}
          >
            <SearchBar />
            <InviteButton />
          </section>
          <section className="px-2 pb-2 flex">
            {data?.details.map(
              (
                detail: {
                  name: string;
                  imageSrc?: string;
                  id: string;
                  options: string;
                  quantity?: string;
                  email?: string;
                },
                index: number
              ) => {
                return (
                  <div key={detail.id} className="flex items-center">
                    {detail.imageSrc && (
                      <img
                        src={detail.imageSrc}
                        alt=""
                        className="w-10 h-10 rounded-full object-contain"
                      ></img>
                    )}
                    {!detail.imageSrc && (
                      <span className="flex items-center justify-center w-10 h-10 rounded-md text-white bg-gray-500"></span>
                    )}
                    <div className="flex flex-col ml-2">
                      <p className="mt-0">{detail.name}</p>
                      <p className="text-sm text-gray-500">
                        {detail.email
                          ? detail.email
                          : detail.quantity + " workspace members"}
                      </p>
                    </div>
                    <div className="ml-20">
                      <Menu>
                        <MenuButton>
                          <div className="flex items-center text-gray-400 cursor-pointer">
                            <span
                              className={`text-sm ${
                                detail.options === "No access"
                                  ? "text-red-400"
                                  : "text-gray-400"
                              }`}
                            >
                              {detail.options}
                            </span>
                            <img
                              src="/assets/Images/caret-down.svg"
                              className="w-2 h-2 mx-2"
                            ></img>
                          </div>
                        </MenuButton>
                        <MenuList className="text-md">
                          {options.map((ele) => (
                            <MenuItem
                              onClick={() => {
                                setOption(ele, index);
                              }}
                              key={ele}
                            >
                              {ele}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </Menu>
                    </div>
                  </div>
                );
              }
            )}
          </section>
          <PopoverFooter />
        </div>
      </PopoverContent>
    </Popover>
  );
}
