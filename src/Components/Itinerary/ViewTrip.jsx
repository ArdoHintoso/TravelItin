import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const ViewTrip = () => {
  const position = { lat: 35.6764, lng: 139.65 };
  return (
    <>
      <Flex align="center" justify="center" height="90.5vh" bg="gray.50">
        <SimpleGrid columns={2} spacing={10}>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box height="55vh">
            <APIProvider
              // apiKey={""}
              onLoad={() => console.log("Maps API has loaded.")}
            >
              <Map center={position} zoom={13}>
                <Marker position={position} />
              </Map>
            </APIProvider>
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default ViewTrip;
