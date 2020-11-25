import * as React from "react";

import { Container, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { Todo } from "@/types/examples";

interface TodoPageProps {
  todo: Todo;
}

export const getStaticProps: GetStaticProps<TodoPageProps> = async ({
  params,
}) => {
  const id = params.id as string;

  const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo = await resp.json();

  return {
    props: {
      todo,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos = (await resp.json()) as Todo[];
  const sliced = todos.slice(0, 10);

  return {
    paths: [
      ...sliced.map((todo) => ({ params: { id: `${todo.id}` }, locale: "en" })),
      ...sliced.map((todo) => ({ params: { id: `${todo.id}` }, locale: "id" })),
    ],
    fallback: false,
  };
};

const TodoPage: NextPage<TodoPageProps> = (props) => {
  const { todo } = props;

  return (
    <Container as="section" maxW="6xl" p={[4, 8]}>
      <Stack spacing={[2, 4]}>
        <HStack>
          <Icon as={todo.completed ? FaRegCheckCircle : FaRegCircle} />
          <Text fontSize="lg">{todo.title}</Text>
        </HStack>
      </Stack>
    </Container>
  );
};

export default TodoPage;
