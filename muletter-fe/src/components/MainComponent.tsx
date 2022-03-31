import { Flex, Text } from "@chakra-ui/react";
import assets from "../assets";

function MainComponent() {
  return (
    <Flex align="center" marginTop="48px" direction="column">
      <img
        src={assets.Logo.BigLogox3}
        alt="MuLetter Main Logo"
        style={{
          width: "266px",
        }}
      />
      <Text color="white" fontSize="28px" fontWeight="regular" marginTop="12px">
        당신만을 위한 음악편지
      </Text>
    </Flex>
  );
}

export default MainComponent;
