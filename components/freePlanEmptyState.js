import React from 'react';
import { Heading, Box, Text, Button } from '@chakra-ui/react';

import DashboardShell from './dashboardShell';

const FreePlanEmptyState = () => (
  <DashboardShell>
    <Box backgroundColor="#ffffff" borderRadius="8px" p={8}>
      <Heading>Get feeback on your site here</Heading>
      <Text>Start today then grow</Text>
      <Button variant="solid" size="md">
        Upgrade to starter
      </Button>
    </Box>
  </DashboardShell>
);

export default DashboardShell;
