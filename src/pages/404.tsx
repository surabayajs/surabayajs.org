import * as React from "react";

import {
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import { FaArrowRight } from "react-icons/fa";
import NextLink from "next/link";
import type { NextPage } from "next";
import i18n from "@/i18n";
import { useRouter } from "next/router";

const NotFoundPage: NextPage = () => {
  const { locale } = useRouter();

  return (
    <Container as="section" maxW="6xl" pt={[4, 8]} px={[4, 8]}>
      <VStack spacing={[2, 4]} textAlign="center">
        <Image
          alt="404"
          borderRadius="md"
          boxShadow="xl"
          maxW="sm"
          mb={[4, 8]}
          src="https://media.giphy.com/media/xT9IgFWN8DXgWvqvBK/giphy.gif"
          w="full"
        />

        <Heading>{i18n["404-title"][locale]}</Heading>

        <Text>{i18n["404-subtitle"][locale]}</Text>

        <NextLink href="/" passHref>
          <Button
            as="a"
            colorScheme="green"
            rightIcon={<Icon as={FaArrowRight} />}
          >
            {i18n["404-button"][locale]}
          </Button>
        </NextLink>
      </VStack>
    </Container>
  );
};

export default NotFoundPage;
