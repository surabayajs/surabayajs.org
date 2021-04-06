import * as React from "react";

import {
  Box,
  Text,
  Stack,
  Heading,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

export const LearningCard = () => {
  const [bgColorLight, bgColorDark] = useToken("colors", ["white", "gray.700"]);
  const bgColor = useColorModeValue(bgColorLight, bgColorDark);
  return (
    <Box
      bgColor={bgColor}
      borderRadius="md"
      boxShadow="base"
      w="full"
      cursor="pointer"
      mb="2"
      _hover={{
        boxShadow: "lg",
      }}
    >
      <Stack p="5">
        <Heading as="h3" size="md">
          Tata Cara Clean Code pada JavaScript
        </Heading>
        <Text>
          Pada Course ini, kalian akan mempelajari bagaimana cara menulis
          variable, function, serta tools yang digunakan untuk membuat Clean
          Code di JavaScript.
        </Text>
      </Stack>
    </Box>
  );
};
