import { Link as ReactRouterLink } from "react-router-dom";

import {
  Flex,
  Center,
  Spacer,
  Link as ChakraLink,
  Avatar,
} from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex bg="teal">
        <Center>
          <ChakraLink
            color="white"
            as={ReactRouterLink}
            to="/"
            textDecoration="none"
          >
            Trip Planner
          </ChakraLink>
        </Center>
        <Spacer />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
      </Flex>
    </>
  );
};

export default Header;
