import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import PopoverFooter from "../Footer/PopoverFooter/PopoverFooter";
import PopoverHeader from "../Header/PopoverHeader/PopoverHeader";
import InviteButton from "../UI/InviteButton/InviteButton";
import SearchBar from "../UI/SearchBar/SearchBar";

export default function SharePopover() {
  return (
    <Popover closeOnBlur={true} styleConfig={{ width: "unset" }}>
      <PopoverTrigger>
        <button className="rounded-lg shadow px-5 py-2 bg-black text-white font-semibold tracking-wider flex items-center gap-2 text-xl">
          Share
          <img src="/assets/Images/share-nodes-solid.svg" className="w-5 h-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="content | w-96 border rounded-lg shadow-lg flex flex-col">
          <PopoverHeader />
          <section className="search_wrapper | flex border-t p-2">
            <SearchBar />
            <InviteButton />
          </section>
          <PopoverFooter />
        </div>
      </PopoverContent>
    </Popover>
  );
}
