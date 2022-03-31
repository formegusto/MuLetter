import { Flex } from "@chakra-ui/react";
import assets from "../../assets";
import { ContainerMar80 } from "./Container";

function Header() {
  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      left={0}
      height={120}
      width="100vw"
      sx={{
        "& .logo": {
          width: "150px",
        },
      }}
      align="center"
    >
      <ContainerMar80>
        <img src={assets.Logo["Logox3"]} alt="MuLetter Logo" className="logo" />
      </ContainerMar80>
    </Flex>
  );
}

export default Header;
