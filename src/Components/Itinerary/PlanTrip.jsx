import {
  Flex,
  Button,
  Box,
  UnorderedList,
  SimpleGrid,
  Input,
  Divider,
} from "@chakra-ui/react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import PointOfInterest from "./PointOfInterest";

const dummy = [
  "Tokyo Tower",
  "Tokyo Disneyland",
  "Tokyo DisneySea",
  "Tokyo Skytree",
  "Tokyo Solamachi MISE",
];

const PlanTrip = () => {
  const position = { lat: 35.6764, lng: 139.65 };
  const [places, setPlaces] = useState(dummy);
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    event.preventDefault;
    setValue(event.target.value);
  };
  const navigate = useNavigate();

  // useEffect(() => {}, [places]);

  return (
    <>
      <Flex align="center" justify="center" height="90.5vh" bg="gray.50">
        <SimpleGrid columns={2} spacing={10}>
          <UnorderedList>
            {places.map((value) => (
              <PointOfInterest name={value} />
            ))}
            <SimpleGrid columns={2} spacing={10}>
              <Input
                value={value}
                onChange={handleChange}
                variant="outline"
                placeholder="Point of Interest"
              />
              <Button
                onClick={(e) => {
                  e.preventDefault;
                  places.push(value);
                  setPlaces(places);
                  setValue("");
                }}
              >
                Add to Itinerary
              </Button>
            </SimpleGrid>
          </UnorderedList>
          <Box width="30vw" height="55vh">
            <APIProvider
              // apiKey={""}
              onLoad={() => console.log("Maps API has loaded.")}
            >
              <Map center={position} zoom={13}>
                <Marker position={position} />
              </Map>
            </APIProvider>
            <Box height="0.5vh"></Box>
            <Divider />
            <Box height="2.5vh"></Box>
            <SimpleGrid columns={2} spacing={10}>
              <Button colorScheme="teal"> Save Draft </Button>
              <Button
                colorScheme="teal"
                onClick={() => {
                  navigate("/result");
                }}
              >
                Finish
              </Button>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default PlanTrip;
