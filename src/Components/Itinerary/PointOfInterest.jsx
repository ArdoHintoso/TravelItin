import {
  ListItem,
  Editable,
  EditableInput,
  EditablePreview,
  Stack,
  Divider,
  Box,
} from "@chakra-ui/react";

const PointOfInterest = ({ name }) => {
  return (
    <>
      <ListItem>
        <Stack direction={["column", "row"]} spacing="24px">
          <Editable fontWeight="bold" defaultValue={name}>
            <EditablePreview />
            <EditableInput />
          </Editable>
          <Editable defaultValue="Intended Duration: 1 hour">
            <EditablePreview />
            <EditableInput />
          </Editable>
        </Stack>
      </ListItem>
      <Box height="0.5vh"></Box>
      <Divider />
      <Box height="2.5vh"></Box>
    </>
  );
};

export default PointOfInterest;
