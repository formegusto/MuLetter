import { Box } from "@chakra-ui/react";
import React from "react";

function Content({ children }: React.PropsWithChildren<any>) {
  return (
    <Box as="main" pt={120}>
      {children}
    </Box>
  );
}

export default Content;
