import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import assets from "../assets";
import DataCard from "./common/DataCard";
import Letter from "./symbol/Letter";

function MainComponent() {
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const allScroll = document.body.scrollHeight;
      const windowSize = window.innerHeight;
      const scrollRate = 300;
      const secondScrollRate = 105;

      const maxScrollY = allScroll - windowSize;
      const scrollY = window.scrollY;

      const elLetterLid = document.querySelector(
        ".letter-lid"
      ) as HTMLDivElement;
      const elLetterFront = document.querySelector(
        ".letter-front"
      ) as HTMLDivElement;
      const elLetterPaper = document.querySelector(
        ".letter-paper"
      ) as HTMLDivElement;

      console.log(scrollY);
      if (elLetterLid && elLetterFront && elLetterPaper) {
        if (scrollY <= scrollRate) {
          elLetterLid.style.transform =
            "rotateX(" + (scrollY / scrollRate) * 270 + "deg)";
          elLetterLid.style.zIndex = "";
          elLetterFront.style.zIndex = "";
          elLetterPaper.style.zIndex = "";
          elLetterPaper.style.transform = "";
        } else {
        }
        if (scrollY > secondScrollRate) {
          elLetterLid.style.zIndex = "1";
          elLetterFront.style.zIndex = "3";
          elLetterPaper.style.zIndex = "2";
          elLetterPaper.style.transform =
            "translateY(-" +
            ((scrollY - secondScrollRate) / (maxScrollY - secondScrollRate)) *
              200 +
            "px)";
        }
      }
    });
  }, []);

  return (
    <Flex align="center" marginTop="48px" direction="column" height="1400px">
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
