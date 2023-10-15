import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  onClose: () => void | boolean;
  cancelRef: unknown;
}

function Modal({ header, body, footer, isOpen, onClose, cancelRef }: Props) {
  console.log("Modal: ", isOpen);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {header}
          </AlertDialogHeader>

          <AlertDialogBody>{body}</AlertDialogBody>

          <AlertDialogFooter>{footer}</AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Modal;
