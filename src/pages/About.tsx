import React from 'react';
import { Container, Text, Space, List } from '@mantine/core';

const About: React.FC = () => {
  return (
    <Container>
      <Text size="xl" fw={700}>
        About this Project:
      </Text>
      <Space h="md" />
      <Text>Welcome to the About page!</Text>
      <Space h="md" />
      <Text>
        This project was created as a coding task to demonstrate the
        implementation of a data dashboard using modern web development tools
        and practices.
      </Text>
      <Space h="md" />
      <Text>
        The dashboard displays data sets provided by various federal ministries.
        The core features of this project include:
      </Text>
      <Space h="md" />
      <List spacing="sm" withPadding>
        <List.Item>
          <Text fw={500}>Data Table:</Text>A comprehensive table that lists the
          data sets from federal ministries, providing a clear and structured
          view of the information.
        </List.Item>
        <List.Item>
          <Text fw={500}>Filter for Descriptions:</Text>A checkbox filter that
          allows users to only display entries that include descriptions. This
          feature helps in quickly focusing on entries with detailed
          information.
        </List.Item>
        <List.Item>
          <Text fw={500}>Sortable Table:</Text>
          The table columns can be sorted by clicking on the headers. This
          allows users to easily organize the data based on their needs, such as
          sorting by department or the number of data sets.
        </List.Item>
      </List>
      <Space h="md" />
      <Text>The application utilizes the following technologies:</Text>
      <Space h="md" />
      <List spacing="sm" withPadding>
        <List.Item>
          <Text fw={500}>React:</Text>
          For building the user interface components.
        </List.Item>
        <List.Item>
          <Text fw={500}>Vite:</Text>
          As the build tool and development server, providing fast and efficient
          development experiences.
        </List.Item>
        <List.Item>
          <Text fw={500}>TanStack Table (formerly React Table):</Text>
          For managing and displaying tabular data with sorting and filtering
          capabilities.
        </List.Item>
        <List.Item>
          <Text fw={500}>Mantine:</Text>
          For UI components and styling, ensuring a modern and responsive
          design.
        </List.Item>
        <List.Item>
          <Text fw={500}>React Query:</Text>
          For fetching, caching, and synchronizing server state in React
          applications.
        </List.Item>
        <List.Item>
          <Text fw={500}>TanStack Router:</Text>
          For routing within the application.
        </List.Item>
      </List>
      <Space h="md" />
    </Container>
  );
};

export default About;
