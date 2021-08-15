import * as React from "react";

import {
  Box,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

type LearningCardProps = {
  data: {
    title: string;
    description: string;
    url: string;
  };
};

export const LearningCard: React.FC<LearningCardProps> = (props) => {
  const { data } = props;

  const [bgColorLight, bgColorDark] = useToken("colors", ["white", "gray.700"]);
  const bgColor = useColorModeValue(bgColorLight, bgColorDark);

  return (
    <Box
      _hover={{
        boxShadow: "lg",
      }}
      bgColor={bgColor}
      borderRadius="md"
      boxShadow="base"
      cursor="pointer"
      mb="2"
      w="full"
    >
      <Stack p="5">
        <Link href={data.url} isExternal textDecoration="none">
          <Heading as="h3" size="md">
            {data.title}
          </Heading>
          <Text>{data.description}</Text>
        </Link>
      </Stack>
    </Box>
  );
};
