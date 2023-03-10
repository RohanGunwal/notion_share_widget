import { Modal, ModalContent } from "@chakra-ui/modal";
import "./App.css";
import ShareContacts from "./components/ShareContacts/ShareContacts";
import SharePopover from "./components/SharePopover/SharePopover";
import { useDataContext } from "./contexts/DataContext";

function App() {
  const { isModalOpen, setModalState }: any = useDataContext();
  return (
    <div className="App | h-screen flex items-start py-20 justify-center bg-gray-100">
      <SharePopover />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        <ModalContent>
          <ShareContacts />
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
