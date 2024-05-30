import { useState } from "react";
import {
  Box,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
  Button,
  CheckboxGroup,
  Checkbox,
  Flex,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { useNavigate } from "react-router-dom";

const NewTrip = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  return (
    <>
      <Flex align="center" justify="center" height="90.5vh" bg="gray.50">
        <VStack spacing={4} align="stretch">
          <Input placeholder="Your destination?" size="medium" />
          <Stack direction={["column", "row"]} spacing="24px">
            <Text>Start Date</Text>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              style={{ display: "inline-block" }}
            />
            <Text>End Date</Text>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              style={{ display: "inline-block" }}
            />
          </Stack>
          <Stack direction={["column", "row"]} spacing="24px">
            <Text>Start Time</Text>
            <Input placeholder="Beginning Time AM/PM" size="medium" />
            <Text>End Time</Text>
            <Input placeholder="Ending Time AM/PM" size="medium" />
          </Stack>
          <CheckboxGroup colorScheme="teal" defaultValue={["Car", "Walking"]}>
            <Stack spacing={[1, 5]} direction={["column", "row"]}>
              <Checkbox value="Car">Car</Checkbox>
              <Checkbox value="Walking">Walking</Checkbox>
              <Checkbox value="Public Transportation">
                Public Transportation
              </Checkbox>
            </Stack>
          </CheckboxGroup>
          <Button
            onClick={() => {
              navigate("/plan");
            }}
          >
            Start Planning!
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default NewTrip;
