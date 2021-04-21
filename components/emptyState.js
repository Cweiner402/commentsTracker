import React from 'react';
import { Heading, Box, Text, Button, Flex } from '@chakra-ui/react';
import AddSiteModal from './addSiteModal';

const EmptyState = () => (

    <Flex
      width="100%"
      backgroundColor="#ffffff"
      borderRadius="8px"
      p={10}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading size="md" mb={2}>Get feeback on your site here</Heading>
      <Text mb={4}>Welcome today then grow</Text>
      <AddSiteModal>
        Add your first site
      </AddSiteModal>
    </Flex>

);

export default EmptyState;
