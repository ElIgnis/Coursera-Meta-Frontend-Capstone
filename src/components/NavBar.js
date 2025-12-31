import { Box, Flex, IconButton, Stack, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBar() {
    const { isOpen, onToggle, onClose } = useDisclosure();

    return (
    <Box as="nav" aria-label="NavBar" px={4} whiteSpace="nowrap">
        <Flex h={16} align="center" justify="space-between">

            <Flex display={{ base: "none", lg: "flex" }} gap={6} color="black">
                <NavLink onClick={onClose} linkPage="/#home">Home</NavLink>
                <NavLink onClick={onClose} linkPage="/#about">About</NavLink>
                <NavLink onClick={onClose} linkPage="/#menu">Menu</NavLink>
                <NavLink onClick={onClose} linkPage="/booking">Reservations</NavLink>
                <NavLink onClick={onClose} linkPage="/#order-online">Order Online</NavLink>
                <NavLink onClick={onClose} linkPage="/#login">Login</NavLink>
            </Flex>

            <IconButton
            display={{ base: "flex", md: "flex" , lg: "none" }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
            bg="white"
            />
        </Flex>

      {isOpen && (
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent  bgColor="#495E57" color="white" mt="96px">
            <DrawerBody>
              <Stack spacing={8} mt={10} margin="16px 0">
                <NavLink onClick={onClose} linkPage="/#home">Home</NavLink>
                <NavLink onClick={onClose} linkPage="/#about">About</NavLink>
                <NavLink onClick={onClose} linkPage="/#menu">Menu</NavLink>
                <NavLink onClick={onClose} linkPage="/booking">Reservations</NavLink>
                <NavLink onClick={onClose} linkPage="/#order-online">Order Online</NavLink>
                <NavLink onClick={onClose} linkPage="/#login">Login</NavLink>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
    )
}


function NavLink({ children, linkPage, ...props }) {
  return (
    <ChakraLink
      px={2}
      py={1}
      rounded="md"
      as={RouterLink}
      to={linkPage}
      _hover={{bg: "brand.yellow", color: "brand.black"}}
      {...props}
    >
      {children}
    </ChakraLink>
  )
}