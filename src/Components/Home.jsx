import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Flex align="center" justify="center" height="90.5vh" bg="gray.50">
        <Button onClick={() => navigate("/signup")}>Sign Up</Button>
        <Button onClick={() => navigate("/new")}>New Trip</Button>
      </Flex>
    </>
  );
};

export default Home;
