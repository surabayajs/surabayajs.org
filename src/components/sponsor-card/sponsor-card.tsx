import * as React from "react";

import { Image, Text, VStack } from "@chakra-ui/react";

import type { Sponsor } from "@/types";
import type { StackProps } from "@chakra-ui/react";

interface SponsorCardProps extends StackProps {
  sponsor: Sponsor;
}

export const SponsorCard: React.FC<SponsorCardProps> = ({
  sponsor,
  ...props
}) => {
  return (
    <VStack
      as="a"
      href={sponsor.url}
      justify="center"
      p={[4, 8]}
      spacing={4}
      target="_blank"
      textAlign="center"
      {...props}
    >
      <Image
        borderRadius="md"
        boxSize="full"
        maxH={["96px", "128px"]}
        maxW={["96px", "128px"]}
        src={sponsor.logo.url}
      />
      <Text fontSize="sm" fontWeight="bold" letterSpacing="tight">
        {sponsor.name}
      </Text>
    </VStack>
  );
};
