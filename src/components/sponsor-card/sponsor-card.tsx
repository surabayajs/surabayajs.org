import * as React from "react";

import { SponsorMetadataFragment } from "@/generated/graphql";
import { Image, StackProps, Text, VStack } from "@chakra-ui/react";

interface SponsorCardProps extends StackProps {
  sponsor: SponsorMetadataFragment;
}

export const SponsorCard: React.FC<SponsorCardProps> = (props) => {
  const { sponsor, ...rest } = props;

  if (!sponsor.logo) {
    throw new Error(`Sponsor ${sponsor.name as string} has no logo`);
  }

  return (
    <VStack
      as="a"
      href={sponsor.url}
      justify="center"
      p={[4, 8]}
      spacing={4}
      target="_blank"
      textAlign="center"
      {...rest}
    >
      <Image
        borderRadius="md"
        boxSize="full"
        maxH={["96px", "128px"]}
        maxW={["96px", "128px"]}
        src={sponsor.logo.url as string}
      />
      <Text fontSize="sm" fontWeight="bold" letterSpacing="tight">
        {sponsor.name}
      </Text>
    </VStack>
  );
};
