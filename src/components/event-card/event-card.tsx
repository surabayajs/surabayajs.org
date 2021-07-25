import * as React from "react";

import { RecentEventMetadataFragment } from "@/generated/graphql";
import {
  Avatar,
  AvatarGroup,
  Button,
  Divider,
  Flex,
  FlexProps,
  Heading,
  HStack,
  Icon,
  Img,
  Stack,
  Text,
  useColorModeValue,
  useToken,
} from "@chakra-ui/react";

import format from "date-fns/format";
import { FaArrowRight } from "react-icons/fa";

interface EventCardProps extends FlexProps {
  event: RecentEventMetadataFragment;
  withNotes?: boolean;
}

export const EventCard: React.FC<EventCardProps> = (props) => {
  const { event, withNotes, ...rest } = props;

  if (!event.poster) {
    throw new Error(`Event ${event.title as string} has no poster`);
  }

  const [bgColorLight, bgColorDark] = useToken("colors", [
    "white",
    "gray.700",
  ]) as [string, string];

  const bgColor = useColorModeValue(bgColorLight, bgColorDark);

  return (
    <Flex
      bgColor={bgColor}
      borderRadius="md"
      boxShadow="base"
      flexDir={{ base: "column", md: "row" }}
      maxW={{ base: "sm", md: "full" }}
      overflow="auto"
      w="full"
      {...rest}
    >
      <Img
        alt={event.title as string}
        maxH="xs"
        maxW={{ md: "sm" }}
        objectFit="cover"
        objectPosition="center"
        src={event.poster.url as string}
        w="full"
      />

      <Stack p={4} w="full">
        <Heading as="h3" size="md">
          {event.title}
        </Heading>

        <AvatarGroup size="sm">
          {event.sessionsCollection?.items.map((s) => (
            <Avatar
              key={s?.sys.id}
              name={s?.speaker?.name as string}
              src={s?.speaker?.avatar?.url as string}
            />
          ))}
        </AvatarGroup>

        <Text fontSize="sm" fontWeight="bold">
          {event.location},{" "}
          {format(new Date(event.startingDate as string), "PPpp")}
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

        <HStack justify="flex-end" pt={4}>
          <Button
            as="a"
            href={event.url as string}
            isTruncated
            rightIcon={<Icon as={FaArrowRight} />}
            size="sm"
            target="_blank"
            variant="outline"
          >
            {event.url}
          </Button>
        </HStack>
      </Stack>
    </Flex>
  );
};
