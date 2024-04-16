import { Box, Button, Card, CardBody, Heading, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";

const User = ({ id, firstname, lastname, age, maidenname, gender, birthdate, email, phone, image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading size="md">{id}</Heading>
          <Text>
            {firstname} {lastname}
          </Text>
          <Button onClick={onOpen} colorScheme="blue">
            Detail
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                {firstname} {lastname}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box boxSize="sm">
                  <Image src={image} />
                </Box>
                <p>Maiden Name: {maidenname}</p>
                <p>Age: {age}</p>
                <p>Gender: {gender}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Birth Date: {birthdate}</p>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default User;
