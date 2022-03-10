import * as React from "react";

import i18n from "@/i18n";

import { Button, Container, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  const locale = router.locale as string;

  return (
    <Container as="section" maxW="6xl" p={[4, 8]}>
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
          <Button as="a" colorScheme="green" rightIcon={<Icon as={FaArrowRight} />}>
            {i18n["404-button"][locale]}
          </Button>
        </NextLink>
      </VStack>
    </Container>
  );
};

export default NotFoundPage;
