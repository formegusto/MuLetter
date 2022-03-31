import React from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  text: string;
};

function DataCard({ text }: Props) {
  const titleRef = React.useRef<HTMLDivElement>(null);
  const topLineRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (titleRef.current) {
      const titleWidth = titleRef.current.clientWidth;
      if (topLineRef.current)
        topLineRef.current.style.width = `${354 - titleWidth - 20}px`;
    }
  }, []);

  return (
    <Box
      className="datacard"
      width="354px"
      height="172px"
      boxSizing="border-box"
      border="1px solid #fff"
      borderTop="none"
      position="relative"
      color="#fff"
    >
      <Text
        ref={titleRef}
        fontSize="20px"
        position="absolute"
        top="-15px"
        left="10px"
        fontWeight="medium"
      >
        {text}
      </Text>
      <Box
        ref={topLineRef}
        height="1px"
        position="absolute"
        top={0}
        right={0}
        background="white"
      />
    </Box>
  );
}

export default DataCard;
