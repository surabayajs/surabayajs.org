import * as React from "react";

import {
  Button,
  Container,
  Heading,
  Icon,
  Link,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import type { GetStaticProps, NextPage } from "next";

import NextLink from "next/link";
import { Todo } from "@/types/examples";

interface TodosPageProps {
  todos: Todo[];
}

export const getStaticProps: GetStaticProps<TodosPageProps> = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = (await resp.json()) as Todo[];
  const sliced = todos.slice(0, 10);

  return {
    props: {
      todos: sliced,
    },
  };
};

const TodosPage: NextPage<TodosPageProps> = (props) => {
  const { todos } = props;

  return (
    <Container as="section" maxW="6xl" p={[4, 8]}>
      <Stack spacing={[2, 4]}>
        <Heading>Todos</Heading>
        <Text>
          Source data from{" "}
          <Link
            color="green.500"
            href="https://jsonplaceholder.typicode.com/todos"
            isExternal
          >
            https://jsonplaceholder.typicode.com/todos
          </Link>
          .
        </Text>
        <List spacing={4}>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <NextLink href={`/todos/${todo.id}`} passHref>
                <Button
                  as="a"
                  leftIcon={
                    <Icon
                      as={todo.completed ? FaRegCheckCircle : FaRegCircle}
                    />
                  }
                  variant="ghost"
                >
                  {todo.title}
                </Button>
              </NextLink>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Container>
  );
};

export default TodosPage;
