import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function CreateBillModal({ isOpen, onClose }: Props) {
  const cancelRef = React.useRef();

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Create Bill</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{/* Form Here */}</AlertDialogBody>
          <AlertDialogFooter>
            <Button
              borderRadius="30px"
              paddingX={10}
              w="100%"
              paddingY={3}
              marginY={3}
              ref={cancelRef}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              borderRadius="30px"
              paddingX={10}
              w="100%"
              bg="yellow.400"
              paddingY={3}
              marginY={3}
              textColor="black"
              _hover={{
                bg: "yellow.500",
              }}
              ml={3}
            >
              Save
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default CreateBillModal;
