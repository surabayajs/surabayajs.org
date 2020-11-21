import * as React from "react";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  LightMode,
  Stack,
  Text,
} from "@chakra-ui/react";

import type { BoxProps } from "@chakra-ui/react";
import type { Event } from "@/types";
import format from "date-fns/format";

interface EventCardProps extends BoxProps {
  event: Event;

  withNotes?: boolean;
  withUrl?: boolean;
}

export const EventCard: React.FC<EventCardProps> = (props) => {
  const { event, withNotes, withUrl, ...rest } = props;

  return (
    <LightMode>
      <Box
        bgColor="white"
        borderRadius="md"
        color="black"
        h="full"
        _hover={{
          boxShadow: "xl",
          transform: "rotate(1deg) scale(1.05) translateY(-12px) ",
        }}
        transition="all 250ms"
        w={["full", "sm", "xs"]}
        {...rest}
      >
        <Box
          bg="linear-gradient(0deg, rgba(255,255,255,1) 1%, rgba(255,255,255,0) 100%)"
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
          {withUrl && (
            <>
              <br />
              <Button isTruncated size="sm">
                {event.url}
              </Button>
            </>
          )}
        </Stack>
      </Box>
    </LightMode>
  );
};
