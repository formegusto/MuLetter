import { Box } from "@chakra-ui/react";

export function ContainerMar80({ children }: React.PropsWithChildren<any>) {
  return (
    <Box margin="0 80px 0" width="calc(100% - 160px)" minWidth="1280px">
      {children}
    </Box>
  );
}
