import { Flex, Text } from "@chakra-ui/react";
import assets from "../assets";
import DataCard from "./common/DataCard";
import Letter from "./symbol/Letter";

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
      <Flex
        marginTop="72px"
        sx={{
          "& > .datacard:first-of-type": {
            marginRight: "32px",
          },
        }}
      >
        <DataCard text="작성 편지 수" />
        <DataCard text="우체통 등록 수" />
      </Flex>
      <Letter />
    </Flex>
  );
}

export default MainComponent;
