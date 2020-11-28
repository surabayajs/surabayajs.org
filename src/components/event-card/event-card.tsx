import * as React from "react";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

import type { BoxProps } from "@chakra-ui/react";
import type { Event } from "@/types";
import format from "date-fns/format";

interface EventCardProps extends BoxProps {
  event: Event;
  withNotes?: boolean;
}

export const EventCard: React.FC<EventCardProps> = (props) => {
  const { event, withNotes, ...rest } = props;

  const [bgColorLight, bgColorDark] = useToken("colors", ["white", "gray.700"]);
  const bgColor = useColorModeValue(bgColorLight, bgColorDark);

  return (
    <Box
      bgColor={bgColor}
      borderRadius="md"
      boxShadow="base"
      h="full"
      w={["full", "sm", "xs"]}
      {...rest}
    >
      <Box
        bg={`linear-gradient(0deg, ${bgColor} 1%, rgba(255,255,255,0) 100%)`}
        h={36}
        mb={-36}
        pos="relative"
        w={{ base: "full", md: "xs" }}
      />

      <Image
        alt={event.title}
        borderRadius="md"
        h={36}
        objectFit="cover"
        objectPosition="top"
        src={event.poster.url}
        w="full"
      />

      <Stack h="full" mt={-36} p={4} pt={36} spacing={4}>
        <Heading as="h3" size="md">
          {event.title}
        </Heading>

        <AvatarGroup size="sm">
          {event.sessionsCollection.items.map((s) => (
            <Avatar
              key={s.sys.id}
              name={s.speaker.name}
              src={s.speaker.avatar.url}
            />
          ))}
        </AvatarGroup>

        <Text fontSize="sm" fontWeight="bold">
          {event.location}, {format(new Date(event.startingDate), "PPpp")}
        </Text>

        <Divider />

        <Text flexGrow={1} fontSize="sm">
          {event.description}
        </Text>

        {withNotes && event.notes && (
          <Text color="gray.500" fontSize="xs" textAlign="right">
            {event.notes}
          </Text>
        )}

        <br />
        <Button as="a" href={event.url} isTruncated size="sm" target="_blank">
          {event.url}
        </Button>
      </Stack>
    </Box>
  );
};
