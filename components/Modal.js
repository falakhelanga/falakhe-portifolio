import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import { useRouter } from "next/router";
import Backdrop from "@material-ui/core/Backdrop";
const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyModal = ({ children, showModal, setShowModal }) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
    setShowModal(false);
  };
  return (
    <ModalContainer
      disablePortal
      open={showModal}
      onClose={handleClose}
      closeAfterTransition={true}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      {children}
    </ModalContainer>
  );
};

export default MyModal;
